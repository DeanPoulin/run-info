'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('runInfoApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });
  }));

  it('should attach results to the scope', function () {
    expect(scope.results.length).toBe(0);
  });
});
