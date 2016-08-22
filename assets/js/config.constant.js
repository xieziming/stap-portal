'use strict';

/**
 * Config constant
 */
app.constant('APP_MEDIAQUERY', {
    'desktopXL': 1200,
    'desktop': 992,
    'tablet': 768,
    'mobile': 480
});
app.constant('JS_REQUIRES', {
    //*** Scripts
    scripts: [
        //*** Javascript Plugins
        {
            name: 'd3',
            files: ['bower_components/d3/d3.min.js']
        },

        //*** jQuery Plugins
        {
            name: 'chartjs',
            files: ['bower_components/chartjs/Chart.min.js']
        }, {
            name: 'ckeditor-plugin',
            files: ['bower_components/ckeditor/ckeditor.js']
        }, {
            name: 'jquery-nestable-plugin',
            file: ['bower_components/jquery-nestable/jquery.nestable.js']
        }, {
            name: 'touchspin-plugin',
            files: ['bower_components/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js', 'bower_components/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.css']
        }, {
            name: 'jquery-appear-plugin',
            files: ['bower_components/jquery-appear/build/jquery.appear.min.js']
        }, {
            name: 'spectrum-plugin',
            files: ['bower_components/spectrum/spectrum.js', 'bower_components/spectrum/spectrum.css']
        }, {
            name: 'jcrop-plugin',
            files: ['bower_components/Jcrop/js/jquery.Jcrop.min.js', 'bower_components/Jcrop/css/jquery.Jcrop.min.css']
        },
		
        //*** Controllers
        {
            name:  'dashboardCtrl',
            files: ['assets/js/controllers/dashboardCtrl.js']
        }, {
            name: 'iconsCtrl', 
            files: ['assets/js/controllers/iconsCtrl.js']
        }, {
            name:  'vAccordionCtrl', 
            files: ['assets/js/controllers/vAccordionCtrl.js']
        }, {
            name:  'ckeditorCtrl',
            files: ['assets/js/controllers/ckeditorCtrl.js']
        }, {
            name:  'laddaCtrl', 
            files: ['assets/js/controllers/laddaCtrl.js']
        }, {
            name:  'executionPlanCtrl',
            files: ['assets/js/controllers/executionPlanCtrl.js'],
            cache: true
        }, {
            name:  'cropCtrl', 
            files: ['assets/js/controllers/cropCtrl.js']
        }, {
            name:  'asideCtrl', 
            files: ['assets/js/controllers/asideCtrl.js']
        }, {
            name:  'toasterCtrl', 
            files: ['assets/js/controllers/toasterCtrl.js']
        }, {
            name:  'sweetAlertCtrl', 
            files: ['assets/js/controllers/sweetAlertCtrl.js']
        }, {
            name:  'mapsCtrl', 
            files: ['assets/js/controllers/mapsCtrl.js']
        }, {
            name:  'chartsCtrl', 
            files: ['assets/js/controllers/chartsCtrl.js']
        }, {
            name:  'calendarCtrl', 
            files: ['assets/js/controllers/calendarCtrl.js']
        }, {
            name:  'nestableCtrl', 
            files: ['assets/js/controllers/nestableCtrl.js']
        }, {
            name:   'validationCtrl', 
            files: ['assets/js/controllers/validationCtrl.js']
        }, {
            name:   'executionPlanDetailCtrl',
            files: ['assets/js/controllers/executionPlanDetailCtrl.js'],
            cache: true
        },, {
            name:   'executionDetailCtrl',
            files: ['assets/js/controllers/executionDetailCtrl.js'],
            cache: true
        }, {
            name:  'wizardCtrl', 
            files: ['assets/js/controllers/wizardCtrl.js']
        }, {
            name:  'uploadCtrl', 
            files: ['assets/js/controllers/uploadCtrl.js']
        }, {
            name:  'treeCtrl', 
            files: ['assets/js/controllers/treeCtrl.js']
        }, {
            name: 'inboxCtrl', 
            files: ['assets/js/controllers/inboxCtrl.js']
        }, {
            name:  'xeditableCtrl', 
            files: ['assets/js/controllers/xeditableCtrl.js']
        }, {
            name:  'chatCtrl', 
            files: ['assets/js/controllers/chatCtrl.js']
        }, {
            name:  'dynamicTableCtrl', 
            files: ['assets/js/controllers/dynamicTableCtrl.js']
        }, {
            name:  'notificationIconsCtrl', 
            files: ['assets/js/controllers/notificationIconsCtrl.js']
        }, {
            name:  'dateRangeCtrl', 
            files: ['assets/js/controllers/daterangeCtrl.js']
        }, {
            name:  'notifyCtrl', 
            files: ['assets/js/controllers/notifyCtrl.js']
        }, {
            name:  'sliderCtrl', 
            files: ['assets/js/controllers/sliderCtrl.js']
        }, {
            name:  'knobCtrl', 
            files: ['assets/js/controllers/knobCtrl.js']
        }, {
            name:  'crop2Ctrl', 
            files: ['assets/js/controllers/crop2Ctrl.js']
        }, {
            name:  'loginCtrl', 
            files: ['assets/js/controllers/loginCtrl.js']
        }, {
            name:  'testCaseCtrl',
            files: ['assets/js/controllers/testCaseCtrl.js']
        }, {
            name:  'testCaseDetailCtrl',
            files: ['assets/js/controllers/testCaseDetailCtrl.js']
        }, {
            name:  'testDataDefinitionCtrl',
            files: ['assets/js/controllers/testDataDefinitionCtrl.js']
        }, {
            name:  'testActionDefinitionCtrl',
            files: ['assets/js/controllers/testActionDefinitionCtrl.js']
        }, {
            name:  'notificationCtrl',
            files: ['assets/js/controllers/notificationCtrl.js']
        }
    ],
    //*** angularJS Modules
    modules: [
        {
            name: 'toaster',
            files: ['bower_components/AngularJS-Toaster/toaster.js', 'bower_components/AngularJS-Toaster/toaster.css']
        }, {
            name: 'angularBootstrapNavTree',
            files: ['bower_components/angular-bootstrap-nav-tree/dist/abn_tree_directive.js', 'bower_components/angular-bootstrap-nav-tree/dist/abn_tree.css']
        },
        {
            name: 'ngTable',
            files: ['bower_components/ng-table/dist/ng-table.min.js', 'bower_components/ng-table/dist/ng-table.min.css']
        }, {
            name: 'ui.mask',
            files: ['bower_components/angular-ui-utils/mask.min.js']
        }, {
            name: 'ngImgCrop',
            files: ['bower_components/ngImgCrop/compile/minified/ng-img-crop.js', 'bower_components/ngImgCrop/compile/minified/ng-img-crop.css']
        }, {
            name: 'angularFileUpload',
            files: ['bower_components/angular-file-upload/angular-file-upload.min.js']
        }, {
            name: 'monospaced.elastic',
            files: ['bower_components/angular-elastic/elastic.js']
        }, {
            name: 'ngMap',
            files: ['bower_components/ngmap/build/scripts/ng-map.min.js']
        }, {
            name: 'chart.js',
            files: ['bower_components/angular-chart.js/dist/angular-chart.min.js', 'bower_components/angular-chart.js/dist/angular-chart.min.css']
        }, {
            name: 'flow',
            files: ['bower_components/ng-flow/dist/ng-flow-standalone.min.js']
        }, {
            name: 'ckeditor',
            files: ['bower_components/angular-ckeditor/angular-ckeditor.min.js']
        }, {
            name: 'mwl.calendar',
            files: ['bower_components/angular-bootstrap-calendar/dist/js/angular-bootstrap-calendar-tpls.js', 'bower_components/angular-bootstrap-calendar/dist/css/angular-bootstrap-calendar.min.css', 'assets/js/config/config-calendar.js']
        }, {
            name: 'ng-nestable',
            files: ['bower_components/ng-nestable/src/angular-nestable.js']
        }, {
            name: 'ngNotify',
            files: ['bower_components/ng-notify/dist/ng-notify.min.js', 'bower_components/ng-notify/dist/ng-notify.min.css']
        }, {
            name: 'xeditable',
            files: ['bower_components/angular-xeditable/dist/js/xeditable.min.js', 'bower_components/angular-xeditable/dist/css/xeditable.css', 'assets/js/config/config-xeditable.js']
        }, {
            name: 'checklist-model',
            files: ['bower_components/checklist-model/checklist-model.js']
        }, {
            name: 'ui.knob',
            files: ['bower_components/ng-knob/dist/ng-knob.min.js']
        }, {
            name: 'ngAppear',
            files: ['bower_components/angular-appear/build/angular-appear.min.js']
        }, {
            name: 'countTo',
            files: ['bower_components/angular-count-to-0.1.1/dist/angular-filter-count-to.min.js']
        }, {
            name: 'angularSpectrumColorpicker',
            files: ['bower_components/angular-spectrum-colorpicker/dist/angular-spectrum-colorpicker.min.js']
        }
    ]
});

app.constant('GATEWAY', {
    //'gatewayUrl': 'http://127.0.0.1:9090'
    'gatewayUrl': 'http://stap.xieziming.com:8080/stap-gateway'
});