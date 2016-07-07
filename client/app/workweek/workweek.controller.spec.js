'use strict';

describe('Component: WorkweekComponent', function () {

  // load the controller's module
  beforeEach(module('aBarcodeNaaApp'));

  var WorkweekComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    WorkweekComponent = $componentController('WorkweekComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
