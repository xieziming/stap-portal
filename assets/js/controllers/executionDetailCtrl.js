'use strict';
/** 
  * controller for Execution Plan Detail
*/
app.controller('executionDetailCtrl', function ($scope, $filter, $http, StapTableService, GATEWAY, $stateParams) {


    $http.get(GATEWAY.gatewayUrl + '/execution/' + $stateParams.id).then(function (res) {
        $scope.execution = res.data;
        $scope.executionPlan = res.data.executionPlanDto;
        $scope.executionContext = res.data.executionContext;
        $scope.testCase = res.data.testCaseDto.testCase;
        $scope.executionLogs = res.data.executionLogDtoList;
        $scope.metaDataList = res.data.executionPlanMetaDtoList;
        $scope.executionSteps = res.data.executionStepDtoList;

        $scope.executionPlanLoglist = res.data.executionLogDtoList;
        var executionOutputTextDtoList = res.data.executionOutputTextDtoList;
        var executionOutputFileDtoList = res.data.executionOutputFileDtoList;
        var executionLogDtoList = res.data.executionLogDtoList;

        $scope.outputTextTable = StapTableService.createStapTable(executionOutputTextDtoList);
        $scope.outputFileTable = StapTableService.createStapTable(executionOutputFileDtoList);
        $scope.executionLogTable = StapTableService.createStapTable(executionLogDtoList);
    });

    $http.get(GATEWAY.gatewayUrl + '/execution/' + $stateParams.id+"/comment").then(function (res) {
        var commentList = res.data;
        $scope.commentTable = StapTableService.createStapTable(commentList);
    });
});