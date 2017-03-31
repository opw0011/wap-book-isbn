'use strict';

/**
 * @ngdoc function
 * @name isbnCheckerApp.controller:ViewOrderCtrl
 * @description
 * # ViewOrderCtrl
 * Controller of the isbnCheckerApp
 */
angular.module('isbnCheckerApp')
  .controller('ViewOrderCtrl', function ($scope, $mdDialog, $http, $filter, APP_BASE_URL, order) {
    $scope.closeDialog = function() {
      $mdDialog.hide();
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

        // round to 2 digit
        $scope.order.totalAmount = Math.round(newSum * 100) / 100;
    }, true);


    // parse ISO date string to Date object
    $scope.parseDate = function(iso){
      return Date.parse(iso);
    }

    // trigger when order button is clicked
    $scope.manageOrder = function(order) {
      console.log(order);

      order.status++; // proceed to the next operation stage

      // order status is 'finish', append the finish date time
      if(order.status == 2) {
        order.finishAt = new Date().toISOString();
      }

      // PUT ajax call
      $http.put(APP_BASE_URL + 'orders/' + order.id, order).then(function(order) {
        console.log(order.data);
        $mdDialog.hide();
      });
    }

    $scope.onChangeDeliveryDate = function(newValue, oldValue) {
      // console.log(moment);
      var time = newValue.toISOString();
      console.log(time);
      $scope.order.deliverAt = time;
    }

    function init() {
      console.log("dialog receive orders: ", order);
      $scope.order = order;
      $scope.order.totalAmount = 0;
    }

    init();
  });