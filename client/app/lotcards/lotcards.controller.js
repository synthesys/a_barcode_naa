'use strict';

(function() {

class WorkweekComponent {

  constructor($http, $scope, $location, socket) {
    this.$http = $http;
    this.$location = $location;
    this.socket = socket;
    this.workThings = [];

    this.options = {
      width: 2,
      height: 100,
      quite: 10,
      displayValue: true,
      font: "monospace",
      textAlign: "center",
      fontSize: 12,
      backgroundColor: "",
      lineColor: "#000"
    };

    this.barcodeThings = [
      {
          type: "ean",
          code: "0029000018068"
      },
      {
          type: "upc",
          code: "029000018068"
      },
      {
          type: "code39",
          code: "Code39 Barcode"
      },
      {
          type: "code128b",
          code: "Code128B Barcode"
      },
      {
          type: "code128c",
          code: "22"
      },
      {
          type: "itf",
          code: "1234567895"
      },
      {
          type: "itf14",
          code: "98765432109213"
      }
    ];

    $scope.$on('$destroy', function() {
      socket.unsyncUpdates('work');
      console.log("anything?");
    });
  }

  $onInit() {
    this.$http.get('/api/works')
      .then(response => {
        this.workThings = response.data;
        this.socket.syncUpdates('work', this.workThings);
        return console.log("Initialized Work Week");
      });
  }
}

angular.module('aBarcodeNaaApp')
  .component('lotcards', {
    templateUrl: 'app/lotcards/lotcards.html',
    controller: WorkweekComponent
  });

})();
