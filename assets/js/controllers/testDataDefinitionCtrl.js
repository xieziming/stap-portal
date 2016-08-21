'use strict';
/**
 * controllers for execution plan page
 * with simple table with sorting and filtering on AngularJS
 */
app.controller('testDataDefinitionCtrl', function ($scope, StapTableService, $http, ENV_CONFIG) {
    $http.get(ENV_CONFIG.gatewayUrl + '/test_data/definition').then(function (res) {
        var testDataDefinitionList = res.data;
        $scope.testDataDefinitionTable = StapTableService.createStapTable(testDataDefinitionList);
    });
});
