/**
 * Created by Suny on 7/6/16.
 */

app.service('AuthService', function ($http, ENV_CONFIG, MessageService) {
    var authService = {};
    var STAP_AUTH_CACHE_KEY = 'stap_local_user_profile_key';
    var authResult = {};

    function loadAuthCache() {
        var userProfileCache = window.localStorage.getItem(STAP_AUTH_CACHE_KEY);
        if(userProfileCache){
            useAuthCache(userProfileCache);
        }
    }

    function writeAuthCache(authResult) {
        var authResultCache = JSON.stringify(authResult)
        window.localStorage.setItem(STAP_AUTH_CACHE_KEY, authResultCache);
        useAuthCache(authResultCache)
    }

    function useAuthCache(authResultCache) {
        authResult = JSON.parse(authResultCache);
        $http.defaults.headers.common['stap-user'] = authResult.userDto.name;
        $http.defaults.headers.common['stap-token'] = authResult.token;
    }

    function destroyAuthCache() {
        authResult = {};
        window.localStorage.removeItem(STAP_AUTH_CACHE_KEY);
        $http.defaults.headers.common['stap-user'] = undefined;
        $http.defaults.headers.common['stap-token'] = undefined;
    }

    authService.login = function (credentials) {
        return $http.post(ENV_CONFIG.gatewayUrl + '/authorize', credentials)
            .then(function (res) {
                writeAuthCache(res.data);
                return res.data;
            }, function () {
                
            });
    };

    authService.logout = function () {
        destroyAuthCache();
    }

    authService.isAuthenticated = function () {
        return !!authResult.token;
    };

    authService.isAuthorized = function (authorizedRoles) {
        if (!angular.isArray(authorizedRoles)) {
            authorizedRoles = [authorizedRoles];
        }
        return (authService.isAuthenticated() && authorizedRoles.indexOf(authResult.userProfile.role) !== -1);
    };

    authService.userProfile = function () {
        return authResult.userDto;
    }

    loadAuthCache();
    return authService;
});

app.run(function ($rootScope, $state, AUTH_EVENTS, AuthService) {
    $rootScope.$on('$stateChangeStart', function (event, next, nextParams, fromState) {
        if('data' in next && 'authorizedRoles' in next.data){
            var authorizedRoles = next.data.authorizedRoles;
            if(!AuthService.isAuthorized(authorizedRoles)){
                event.preventDefault();
                $state.go($state.current, {}, {reload: true});
            }
        }

        if(!AuthService.isAuthenticated()) {
            if(next.name !== "login.signin"){
                $rootScope.$broadcast(AUTH_EVENTS.notAuthenticated);
            }
        }
    });
    $rootScope.$on(AUTH_EVENTS.notAuthorized, function (event) {
        event.preventDefault();
        $state.go('login.signin');
    });
    $rootScope.$on(AUTH_EVENTS.notAuthenticated, function (event) {
        event.preventDefault();
        $state.go('login.signin');
    });
});