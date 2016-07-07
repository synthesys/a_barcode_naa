'use strict';

angular.module('aBarcodeNaaApp.auth', ['aBarcodeNaaApp.constants', 'aBarcodeNaaApp.util',
    'ngCookies', 'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
