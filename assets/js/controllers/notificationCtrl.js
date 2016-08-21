/**
 * Created by Suny on 8/13/16.
 */
'use strict';
app.controller('notificationCtrl', function ($scope, $http, ENV_CONFIG, $interval, $state, MessageService) {
    $interval(function () {
            loadNotification();
    }, 10000);

    var loadNotification = function () {
        if($state.current.name.indexOf("app") > -1) {
            $http.get(ENV_CONFIG.gatewayUrl + '/notification').then(function (res) {
                $scope.notifications = res.data;
            });
        }
    }

    loadNotification();
});
