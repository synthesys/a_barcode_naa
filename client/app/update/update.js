'use strict';

angular.module('aBarcodeNaaApp')
  .config(function ($stateProvider) {
    $stateProvider.state('update', {
        url: '/update',
        template: '<update></update>'
      });
  });
