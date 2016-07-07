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
      this.$http.get('/api/works')
        .then(response => {
          this.workThings = response.data;
          this.socket.syncUpdates('work', this.workThings);
          return console.log("Initialized Work Week");
        });
    }

    addWork() {
      if (this.newWork) {
        this.$http.post('/api/works', {
          week: this.newWork.week,
          date: this.newWork.date,
          updated: this.newWork.updated,
          models: {
            sh: this.newWork.models.sh,
            ms: this.newWork.models.ms
          }
        });
        this.newWork = '';
        return console.log("we added it?");
      }
    }

    changeView(id) {
      var update = '/update';
      this.$location.path(update).search('work', id);
      return console.log("I have id: %s", id);
    }

    deleteWork(work) {
      this.$http.delete('api/works/' + work._id);
      return console.log("we deleted it.");
    }
  }

  angular.module('aBarcodeNaaApp')
    .component('workweek', {
      templateUrl: 'app/workweek/workweek.html',
      controller: WorkweekComponent
    });
})();
