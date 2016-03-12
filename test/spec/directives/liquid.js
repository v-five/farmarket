'use strict';

describe('Directive: liquid', function () {

  // load the directive's module
  beforeEach(module('fermaApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<liquid></liquid>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the liquid directive');
  }));
});
