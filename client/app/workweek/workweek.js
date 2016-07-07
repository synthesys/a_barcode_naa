'use strict';

angular.module('aBarcodeNaaApp')
  .config(function($stateProvider) {
    $stateProvider.state('workweek', {
        url: '/workweek',
        template: '<workweek></workweek>'
      });
  });
