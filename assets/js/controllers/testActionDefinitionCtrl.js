'use strict';
/**
 * controllers for execution plan page
 * with simple table with sorting and filtering on AngularJS
 */
app.controller('testActionDefinitionCtrl', function ($scope, StapTableService, $http, GATEWAY) {
    $http.get(GATEWAY.gatewayUrl + '/test_action/definition').then(function (res) {
        var testActionDefinitonList = res.data;
        $scope.testActionDefinitionTable = StapTableService.createStapTable(testActionDefinitonList);
    });
});
