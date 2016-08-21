'use strict';
/**
 * controllers for test case page
 * with simple table with sorting and filtering on AngularJS
 */
app.controller('testCaseCtrl', function ($scope, StapTableService, $http, ENV_CONFIG) {
    $http.get(ENV_CONFIG.gatewayUrl + '/test_case').then(function (res) {
        var testCaseList = res.data;
        $scope.testCaseTable = StapTableService.createStapTable(testCaseList);
    });
});
