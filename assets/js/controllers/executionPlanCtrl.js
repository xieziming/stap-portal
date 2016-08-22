'use strict';
/**
 * controllers for execution plan page
 * with simple table with sorting and filtering on AngularJS
 */
app.controller('executionPlanCtrl', function ($scope, StapTableService, $http, GATEWAY) {
    $http.get(GATEWAY.gatewayUrl + '/execution_plan').then(function (res) {
        var executionPlanList = res.data;
        $scope.executionPlanTable = StapTableService.createStapTable(executionPlanList);
    });
});
