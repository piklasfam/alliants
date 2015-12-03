(function() {
  'use strict';
    var app = angular.module('app', ['app.controllers', 'app.directives', 'ui.router']);
    app.config(function($stateProvider, $urlRouterProvider) {  
	$stateProvider
        .state('form', {
            url: '/form',
            templateUrl: 'pages/form.html',
            controller: 'AppCtrl'
        })
        .state('form.step1', {
            url: '/1',
            templateUrl: 'pages/step1.html',
        })
        .state('form.step2', {
            url: '/2',
            templateUrl: 'pages/step2.html'
        })
        .state('form.step3', {
            url: '/3',
            templateUrl: 'pages/step3.html'
        })
        .state('form.step4', {
            url: '/4',
            templateUrl: 'pages/step4.html'
        })
        .state('form.total', {
            url: '/total',
            templateUrl: 'pages/total.html'
        });
    $urlRouterProvider.otherwise('/form/1');
    
    }
  );
}).call(this);
