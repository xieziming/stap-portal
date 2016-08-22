'use strict';
/** 
  * controller for User Profile Example
*/
app.controller('LoginCtrl', function ($scope, $rootScope, $state, $http, AUTH_EVENTS, AuthService) {
    $scope.credentials = {
        principal : '',
        password : ''
    };
    $scope.login = function (credentials) {
        AuthService.login(credentials).then(function (authResult) {
            if(authResult) {
                if (authResult.authSuccess) {
                    $rootScope.setCurrentUser(authResult.userDto);
                    $rootScope.setAuthToken(authResult.token);
                    $state.go("app.dashboard");
                } else {
                    $scope.result = authResult.authFailureReason;
                    $rootScope.$broadcast(AUTH_EVENTS.loginFailed);
                }
            }else{
                $scope.result = "fail to connect to server!";
            }
        });
    };
});