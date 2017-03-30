'use strict';

/**
 * @ngdoc function
 * @name isbnCheckerApp.controller:CreateOrderCtrl
 * @description
 * # CreateOrderCtrl
 * Controller of the isbnCheckerApp
 */
angular.module('isbnCheckerApp')
  .controller('CreateOrderCtrl', function ($scope, $mdDialog, $http, $filter, APP_BASE_URL, bookstore, books) {
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

      var orders = [];
      for(var book of books) {
        var order = {};
        order.bookid = book.product_id;
        order.publisher = book.publisher;
        order.quantity = book.orderQuantity;
        order.bookName = book.name;
        order.storeid = book.store_id;
        order.address = $scope.deliveryAddress;
        order.phone = $scope.contactNumber;
        order.createAt = new Date().toISOString();
        order.status = 0; // 0 = pending, 1 = confirmed, 2 = closed
        orders.push(order);
      }
      console.log(orders);

      // var groupedOrders = $filter('groupBy')(orders, 'publisher');
      // console.log("grouped by: ", groupedOrders);

      // for(var publisher in groupedOrders) {
      //   console.log(publisher);
      // }

      // <publisher, [books items]>
      // angular.forEach(groupedOrders, function(value, key) {
      //   console.log(key + ': ' + value);
      // });

      // for(var order of orders) {
      //   $http.post(APP_BASE_URL + 'orders', order).then(function(order) {
      //     console.log(order.data);
      //   });
      // }

      // $mdDialog.hide();
    }
  });
