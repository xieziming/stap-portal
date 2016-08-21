'use strict';

/**
 * Config for the router
 */
app.config(['$stateProvider', '$urlRouterProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$ocLazyLoadProvider', 'JS_REQUIRES',
function ($stateProvider, $urlRouterProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $ocLazyLoadProvider, jsRequires) {

    app.controller = $controllerProvider.register;
    app.directive = $compileProvider.directive;
    app.filter = $filterProvider.register;
    app.factory = $provide.factory;
    app.service = $provide.service;
    app.constant = $provide.constant;
    app.value = $provide.value;

    // LAZY MODULES

    $ocLazyLoadProvider.config({
        debug: false,
        events: true,
        modules: jsRequires.modules
    });

    // APPLICATION ROUTES
    // -----------------------------------
    // For any unmatched url, redirect to /app/dashboard
    $urlRouterProvider.otherwise("/app/dashboard");
    //
    // Set up the states
    $stateProvider.state('app', {
        url: "/app",
        templateUrl: "assets/views/app.html",
        resolve: loadSequence('chartjs', 'chart.js', 'chatCtrl', 'notificationCtrl'),
        abstract: true
    }).state('app.dashboard', {
        url: "/dashboard",
        templateUrl: "assets/views/dashboard.html",
        resolve: loadSequence('d3', 'ui.knob', 'countTo', 'dashboardCtrl'),
        title: 'Dashboard',
        ncyBreadcrumb: {
            label: 'navigation.dashboard'
        }
    }).state('app.execution_plan', {
        url: '/execution_plan',
        template: '<div ui-view class="fade-in-up"></div>',
        title: 'Execution Plan',
        ncyBreadcrumb: {
            label: 'executionPlan.ExecutionPlan'
        },
        abstract: true
    }).state('app.execution_plan.list', {
        url: '/list',
        templateUrl: "assets/views/execution_plan.html",
        title: 'Execution Plan',
        ncyBreadcrumb: {
            label: 'executionPlan.executionPlanList'
        },
        resolve: loadSequence('ngTable', 'executionPlanCtrl')
    }).state('app.execution_plan.detail', {
        url: '/:id/detail',
        templateUrl: "assets/views/execution_plan_detail.html",
        title: 'Execution Plan Detail',
        ncyBreadcrumb: {
            label: 'executionPlan.executionPlanDetail'
        },
        resolve: loadSequence('flow','ngTable', 'executionPlanDetailCtrl')
    }).state('app.execution', {
        url: '/execution',
        template: '<div ui-view class="fade-in-up"></div>',
        title: 'Execution',
        ncyBreadcrumb: {
            label: 'execution.execution'
        }
    }).state('app.execution.detail', {
        url: '/:id/detail',
        templateUrl: "assets/views/execution_detail.html",
        title: 'Execution Detail',
        ncyBreadcrumb: {
            label: 'execution.executionDetail'
        },
        resolve: loadSequence('flow','ngTable', 'executionDetailCtrl')
    }).state('app.test_case', {
        url: '/test_case',
        template: '<div ui-view class="fade-in-up"></div>',
        title: 'Test Case',
        ncyBreadcrumb: {
            label: 'testCase.testCase'
        },
        abstract: true
    }).state('app.test_case.list', {
        url: '/list',
        templateUrl: "assets/views/test_case.html",
        title: 'Test Case',
        ncyBreadcrumb: {
            label: 'testCase.testCase'
        },
        resolve: loadSequence('ngTable', 'testCaseCtrl')
    }).state('app.test_case.detail', {
        url: '/:id/detail',
        templateUrl: "assets/views/test_case_detail.html",
        title: 'Test Case Detail',
        ncyBreadcrumb: {
            label: 'testCase.testCaseDetail'
        },
        resolve: loadSequence('flow','ngTable', 'testCaseDetailCtrl')
    }).state('app.test_data', {
        url: '/test_data',
        template: '<div ui-view class="fade-in-up"></div>',
        title: 'Test Data',
        ncyBreadcrumb: {
            label: 'common.testData'
        },
        abstract: true
    }).state('app.test_data.config', {
        url: '/config',
        template: '<div ui-view class="fade-in-up"></div>',
        title: 'Test Case',
        ncyBreadcrumb: {
            label: 'navigation.dataConfig'
        },
        abstract: true
    }).state('app.test_data.config.test_data_definition', {
            url: '/test_data_definition',
            templateUrl: "assets/views/test_data_definition.html",
            title: 'Test Data Definitions',
            ncyBreadcrumb: {
                label: 'testData.Definitions'
            },
            resolve: loadSequence('ngTable', 'testDataDefinitionCtrl')
        })
        .state('app.test_data.config.test_action_definition', {
            url: '/test_action_definition',
            templateUrl: "assets/views/test_action_definition.html",
            title: 'Test Action Definitions',
            ncyBreadcrumb: {
                label: 'testAction.Definitions'
            },
            resolve: loadSequence('ngTable', 'testActionDefinitionCtrl')
        })
	// Login routes
	.state('login', {
	    url: '/login',
	    template: '<div ui-view class="fade-in-right-big smooth"></div>',
	    abstract: true
	}).state('login.signin', {
	    url: '/signin',
	    templateUrl: "assets/views/login_login.html",
        resolve: loadSequence('loginCtrl'),
	}).state('login.forgot', {
	    url: '/forgot',
	    templateUrl: "assets/views/login_forgot.html"
	}).state('login.registration', {
	    url: '/registration',
	    templateUrl: "assets/views/login_registration.html"
	}).state('login.lockscreen', {
	    url: '/lock',
	    templateUrl: "assets/views/login_lock_screen.html"
	});
    // Generates a resolve object previously configured in constant.JS_REQUIRES (config.constant.js)
    function loadSequence() {
        var _args = arguments;
        return {
            deps: ['$ocLazyLoad', '$q',
			function ($ocLL, $q) {
			    var promise = $q.when(1);
			    for (var i = 0, len = _args.length; i < len; i++) {
			        promise = promiseThen(_args[i]);
			    }
			    return promise;

			    function promiseThen(_arg) {
			        if (typeof _arg == 'function')
			            return promise.then(_arg);
			        else
			            return promise.then(function () {
			                var nowLoad = requiredData(_arg);
			                if (!nowLoad)
			                    return $.error('Route resolve: Bad resource name [' + _arg + ']');
			                return $ocLL.load(nowLoad);
			            });
			    }

			    function requiredData(name) {
			        if (jsRequires.modules)
			            for (var m in jsRequires.modules)
			                if (jsRequires.modules[m].name && jsRequires.modules[m].name === name)
			                    return jsRequires.modules[m];
                    if(jsRequires.scripts)
                        for (var m in jsRequires.scripts)
                            if (jsRequires.scripts[m].name && jsRequires.scripts[m].name === name)
                                return jsRequires.scripts[m];
			    }
			}]
        };
    }
}]);