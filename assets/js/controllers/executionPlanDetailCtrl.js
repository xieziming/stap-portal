'use strict';
/** 
  * controller for Execution Plan Detail
*/
app.controller('executionPlanDetailCtrl', function ($rootScope, $scope, $filter, $http, ngTableParams, GATEWAY, $stateParams, $timeout, MessageService, StapTableService) {


    $http.get(GATEWAY.gatewayUrl + '/execution_plan/' + $stateParams.id).then(function (res) {
        $scope.executionPlan = {
            id: res.data.id,
            name: res.data.name,
            description: res.data.description,
            status: res.data.status
        };
        $scope.metaDataList = res.data.executionPlanMetaDtoList;
    });

    $http.get(GATEWAY.gatewayUrl + '/execution_plan/' + $stateParams.id+"/execution_list").then(function (res) {
        var executionBriefData = res.data;
        $scope.executionsTable = StapTableService.createStapTable(executionBriefData);
    });

    $http.get(GATEWAY.gatewayUrl + '/execution_plan/' + $stateParams.id+"/revision").then(function (res) {
        var executionPlanRevisionList = res.data.executionPlanRevisionList;
        var executionContextRevisionList = res.data.executionContextRevisionList;
        $scope.revisionTable = StapTableService.createStapTable(executionPlanRevisionList.concat(executionContextRevisionList));
        $scope.executionPlanRevisionList = executionPlanRevisionList;
    });

    $http.get(GATEWAY.gatewayUrl + '/execution_plan/' + $stateParams.id+"/comment").then(function (res) {
        var commentList = res.data;
        $scope.commentTable = StapTableService.createStapTable(commentList);
    });


    $scope.ldloading = {};
    $scope.updateExecutionPlan = function () {
        $http.post(GATEWAY.gatewayUrl + '/execution_plan/' + $stateParams.id, $scope.executionPlan).then(function (res) {
            MessageService.success("execution plan updated!");
        }, function (err) {
            MessageService.error(err.msg);
        });
    };

    $scope.deleteExecutionPlan = function () {
        var style = 'expand-right';
        $scope.ldloading[style.replace('-', '_') + "_progress"] = true;
        $timeout(function () {
            $scope.ldloading[style.replace('-', '_') + "_progress"] = 0.3;
        }, 500);
        $timeout(function () {
            $scope.ldloading[style.replace('-', '_') + "_progress"] += 0.2;
        }, 1000);

        $http.post(GATEWAY.gatewayUrl + '/execution_plan/' + $stateParams.id, $scope.executionPlan).then(function (res) {
            //alert(res.data);
        }, function (err) {
            alert(err);
        });
    };

    $scope.putMeta = {};

    var removeMeta = function (id) {
        var index = -1;
        var comArr = eval($scope.metaDataList);
        for (var i = 0; i < comArr.length; i++) {
            if (comArr[i].id === id) {
                index = i;
                break;
            }
        }
        if (index === -1) {
            alert("Something gone wrong");
        }
        $scope.metaDataList.splice(index, 1);
    };

    $scope.putExecutionPlanMeta = function () {
        $scope.putMeta.executionPlanId = $scope.executionPlan.id;
        $http.post(GATEWAY.gatewayUrl + '/execution_plan/' + $stateParams.id+"/execution_plan_meta", $scope.putMeta).then(function (res) {
            $scope.metaDataList.push(res.data);
            $scope.putMeta = {};
        }, function (err) {
            alert(err);
        });
    };

    $scope.editExecutionPlanMeta = function (meta) {
        $scope.putMeta = meta;
    };

    $scope.deleteExecutionPlanMeta = function (meta) {
        $http.delete(GATEWAY.gatewayUrl + '/execution_plan/' + $stateParams.id+"/execution_plan_meta/"+meta.id).then(function (res) {
            removeMeta(meta.id);
        }, function (err) {
            alert(err);
        });
    };


});