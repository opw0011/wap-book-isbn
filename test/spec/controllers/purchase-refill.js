'use strict';

describe('Controller: PurchaseRefillCtrl', function () {

  // load the controller's module
  beforeEach(module('isbnCheckerApp'));

  var PurchaseRefillCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    PurchaseRefillCtrl = $controller('PurchaseRefillCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(PurchaseRefillCtrl.awesomeThings.length).toBe(3);
  });
});
