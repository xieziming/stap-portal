'use strict';
/**
 * controllers for execution plan page
 * with simple table with sorting and filtering on AngularJS
 */
app.controller('testActionDefinitionCtrl', function ($scope, StapTableService, $http, ENV_CONFIG) {
    $http.get(ENV_CONFIG.gatewayUrl + '/test_action/definition').then(function (res) {
        var testActionDefinitonList = res.data;
        $scope.testActionDefinitionTable = StapTableService.createStapTable(testActionDefinitonList);
    });
});
