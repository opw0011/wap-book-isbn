'use strict';

describe('Controller: ViewOrderCtrl', function () {

  // load the controller's module
  beforeEach(module('isbnCheckerApp'));

  var ViewOrderCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ViewOrderCtrl = $controller('ViewOrderCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ViewOrderCtrl.awesomeThings.length).toBe(3);
  });
});
