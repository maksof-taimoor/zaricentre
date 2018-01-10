var app = angular.module('myApp', ['ui.bootstrap', 'ui.router', 'LocalStorageModule', 'vesparny.fancyModal', 'ngRoute', 'ui', 'ipCookie', 'angular-md5',]);

app.config(function($stateProvider, $urlRouterProvider, $provide, $locationProvider) {
    
    $provide.decorator('$uiViewScroll', function ($delegate) {
        return function (uiViewElement) {}; 
    });

    $urlRouterProvider.otherwise('/login');

    $stateProvider
        
        // Login Page
        .state('login', {
            url: '/login',
            templateUrl: 'partials/login.html',
            controller: 'loginCtrl'
        })

        // Dashboard Page
        .state('home', {
            url: '/home',
            templateUrl: 'partials/dashboard.html',
            controller: 'dashboardCtrl'
        });

        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('');
        
});