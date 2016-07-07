'use strict';

(function() {

  class WorkweekComponent {

    constructor($http, $scope, $location, socket) {
      this.$http = $http;
      this.$location = $location;
      this.socket = socket;
      this.workThings = [];

      $scope.$on('$destroy', function() {
        socket.unsyncUpdates('work');
        console.log("anything?");
      });
    }
    //Gets /api/works db information
    $onInit() {
      var id = this.$location.search().work;
      var url = '/api/works/' + id;
      console.log("the id we found in the url is: %s", id);
      console.log("the url is: %s", url);
      this.$http.get(url)
        .then(response => {
          console.log("anything here?");
          this.workThings = response.data;
          console.log("this is the data: %s", this.workThings);
          this.socket.syncUpdates('work', this.workThings);
          return console.log("Initialized Update");
        });
    }

    updateWork(work) {
      var id = this.$location.search().work;
      var url = '/api/works/' + work;
      this.$http.put(url, {
        _id: id,
        week: this.workThings.week,
        date: this.workThings.date,
        updated: this.workThings.updated,
        models: {
          sh: this.workThings.models.sh,
          ms: this.workThings.models.ms
        }
      });
    }
  }

angular.module('aBarcodeNaaApp')
  .component('update', {
    templateUrl: 'app/update/update.html',
    controller: WorkweekComponent
  });

})();
