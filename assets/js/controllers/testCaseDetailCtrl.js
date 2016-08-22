'use strict';
/** 
  * controller for Test Case Detail
*/
app.controller('testCaseDetailCtrl', function ($scope, StapTableService, $http, GATEWAY, $stateParams) {


    $http.get(GATEWAY.gatewayUrl + '/test_case/' + $stateParams.id).then(function (res) {
        $scope.testCase = res.data.testCase;

        var testDataList = res.data.testDataDtoList;
        var testStepList = res.data.testStepDtoList;
        var testCaseMetaList = res.data.testCaseMetaDtoList;
        var executionBriefList = res.data.executionBriefDtoList;

        $scope.testDataTable = StapTableService.createStapTable(testDataList);
        $scope.testStepTable = StapTableService.createStapTable(testStepList);
        $scope.testCaseMetaTable = StapTableService.createStapTable(testCaseMetaList);
        $scope.executionTable = StapTableService.createStapTable(executionBriefList);
    });

    $http.get(GATEWAY.gatewayUrl + '/test_case/' + $stateParams.id+"/revision").then(function (res) {
        $scope.testCaseRevisionList = res.data.testCaseRevisionList;
        var testCaseRevisionList = res.data.testCaseRevisionList;
        var testDataDefinitionRevisionList = res.data.testDataDefinitionRevisionList;
        var testActionRevisionList = res.data.testActionRevisionList;
        $scope.revisionTable = StapTableService.createStapTable(testCaseRevisionList.concat(testDataDefinitionRevisionList.concat(testActionRevisionList)), 10,'desc');
    });

    $http.get(GATEWAY.gatewayUrl + '/test_case/' + $stateParams.id+"/comment").then(function (res) {
        var commentList = res.data;
        $scope.commentTable = StapTableService.createStapTable(commentList);
    });
});