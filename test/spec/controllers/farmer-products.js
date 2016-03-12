'use strict';

describe('Controller: FarmerProductsCtrl', function () {

  // load the controller's module
  beforeEach(module('fermaApp'));

  var FarmerProductsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    FarmerProductsCtrl = $controller('FarmerProductsCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(FarmerProductsCtrl.awesomeThings.length).toBe(3);
  });
});
