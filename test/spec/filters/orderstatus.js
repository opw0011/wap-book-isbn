'use strict';

describe('Filter: orderStatus', function () {

  // load the filter's module
  beforeEach(module('isbnCheckerApp'));

  // initialize a new instance of the filter before each test
  var orderStatus;
  beforeEach(inject(function ($filter) {
    orderStatus = $filter('orderStatus');
  }));

  it('should return the input prefixed with "orderStatus filter:"', function () {
    var text = 'angularjs';
    expect(orderStatus(text)).toBe('orderStatus filter: ' + text);
  });

});
