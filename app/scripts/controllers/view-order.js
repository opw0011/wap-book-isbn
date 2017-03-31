'use strict';

/**
 * @ngdoc function
 * @name isbnCheckerApp.controller:ViewOrderCtrl
 * @description
 * # ViewOrderCtrl
 * Controller of the isbnCheckerApp
 */
angular.module('isbnCheckerApp')
  .controller('ViewOrderCtrl', function ($scope, $mdDialog, $http, APP_BASE_URL, order) {
    $scope.closeDialog = function() {
      $mdDialog.hide();
    }

    function init() {
      console.log("dialog receive orders: ", order);
      $scope.order = order;
      $scope.order.totalAmount = 0;
    }

    function calacualteTotalAmountToPay(books) {
      // console.log("calacualteTotalAmountToPay", books);
      var sum = 0;
      for(var book of books) {
        if(book.price == null) continue;
        sum += book.quantity * book.price;
      }
      return sum;
    }

    // listen to the books array's change
    $scope.$watch('order.books', function(newValue, oldValue) {
        // console.log(newValue);
        var newSum = calacualteTotalAmountToPay(newValue);
        // console.log(newSum);
        $scope.order.totalAmount = newSum;
    }, true);

    init();
  });
