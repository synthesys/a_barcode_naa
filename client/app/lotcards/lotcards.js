'use strict';

angular.module('aBarcodeNaaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('lotcards', {
        url: '/lotcards',
        template: '<lotcards></lotcards>'
      });
  });


  JsBarcode("#barcode", "1234", {
    format: "pharmacode",
    lineColor: "#0aa",
    width:4,
    height:40,
    displayValue: false
  });
