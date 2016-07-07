'use strict';

describe('Component: LotcardsComponent', function () {

  // load the controller's module
  beforeEach(module('aBarcodeNaaApp'));

  var LotcardsComponent, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController, $rootScope) {
    scope = $rootScope.$new();
    LotcardsComponent = $componentController('LotcardsComponent', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    1.should.equal(1);
  });
});
