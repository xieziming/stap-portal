'use strict';
/**
 * controllers for execution plan page
 * with simple table with sorting and filtering on AngularJS
 */
app.controller('executionPlanCtrl', function ($scope, StapTableService, $http, ENV_CONFIG) {
    $http.get(ENV_CONFIG.gatewayUrl + '/execution_plan').then(function (res) {
        var executionPlanList = res.data;
        $scope.executionPlanTable = StapTableService.createStapTable(executionPlanList);
    });
});
