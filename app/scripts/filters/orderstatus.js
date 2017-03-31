'use strict';

/**
 * @ngdoc filter
 * @name isbnCheckerApp.filter:orderStatus
 * @function
 * @description
 * # orderStatus
 * Filter in the isbnCheckerApp.
 */
angular.module('isbnCheckerApp')
  .filter('orderStatus', function () {
    return function (input) {
      switch(input) {
        case 0: 
          return "Pending";
        case 1:
          return "Confirmed";
        case 2:
          return "Finished";
        default:
          return "Unknown";
      }
      // return 'orderStatus filter: ' + input;
    };
  });
