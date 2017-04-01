'use strict';

/**
 * @ngdoc function
 * @name isbnCheckerApp.controller:CreateOrderCtrl
 * @description
 * # CreateOrderCtrl
 * Controller of the isbnCheckerApp
 */
angular.module('isbnCheckerApp')
  .controller('CreateOrderCtrl', function ($scope, $location, $mdDialog, $http, $filter, $timeout, APP_BASE_URL, bookstore, books) {
    $scope.closeDialog = function() {
      $mdDialog.hide();
    }

    function init() {
      console.log("dialog receive books: ", books);
      $scope.books = books;
      $scope.bookstore = bookstore
      $scope.deliveryAddress = bookstore.street + ', ' + bookstore.city + ', ' + bookstore.country;
      $scope.contactNumber = bookstore.phone;
    }

    init();

    $scope.createOrder = function(books) {
      // loop through all the books, generate the order grouped by book publishers
      console.log("book order: ", books);

      // group books by publishers
      // publisher : [books]
      var orderMap = {};
      for(var book of books) {
        var order = {};
        order.bookid = book.product_id;
        order.quantity = book.orderQuantity;
        order.bookName = book.name;

        if( orderMap[book.publisher]  == null) {
          orderMap[book.publisher]  = [];
        }

        orderMap[book.publisher].push(order);
      }

      // Format the data for POST request
      var pendingList = [];
      angular.forEach(orderMap, function(value, key) {
        console.log(key,  value);
        var order = {};
        order.publisher = key;
        order.storeid = bookstore.id;
        order.address = $scope.deliveryAddress;
        order.phone = $scope.contactNumber;
        order.createAt = new Date().toISOString();
        order.status = 0; // 0 = pending, 1 = confirmed, 2 = closed
        order.books = [];
        for(book of value) {
          order.books.push(book);
        }
        console.log("Final order: ", order);
        pendingList.push(order);
      });

      console.log(pendingList);

      // POST ajax call to server
      for(var order of pendingList) {
        $http.post(APP_BASE_URL + 'orders', order).then(function(order) {
          console.log(order.data);
        });
      }

      // clear the books
      $scope.books = [];

      // TODO: refactor to waiting all ajax calls resolve promise
      setTimeout(function() {
          $location.path('/orders').search({ 'storeid' : bookstore.id, 'status' : 0 });
          $mdDialog.hide();
      }, 1000);
    
    }
  });
