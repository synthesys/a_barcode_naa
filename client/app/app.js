'use strict';

angular.module('aBarcodeNaaApp', ['aBarcodeNaaApp.auth', 'aBarcodeNaaApp.admin',
    'aBarcodeNaaApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'btford.socket-io',
    'ui.router', 'ui.bootstrap', 'validation.match'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
