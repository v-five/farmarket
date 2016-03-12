'use strict';

describe('Controller: FarmerCtrl', function () {

  // load the controller's module
  beforeEach(module('fermaApp'));

  var FarmerCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FarmerCtrl = $controller('FarmerCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FarmerCtrl.awesomeThings.length).toBe(3);
  });
});
