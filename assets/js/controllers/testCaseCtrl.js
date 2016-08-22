'use strict';
/**
 * controllers for test case page
 * with simple table with sorting and filtering on AngularJS
 */
app.controller('testCaseCtrl', function ($scope, StapTableService, $http, GATEWAY) {
    $http.get(GATEWAY.gatewayUrl + '/test_case').then(function (res) {
        var testCaseList = res.data;
        $scope.testCaseTable = StapTableService.createStapTable(testCaseList);
    });
});
