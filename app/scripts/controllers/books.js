'use strict';

/**
 * @ngdoc function
 * @name isbnCheckerApp.controller:BooksCtrl
 * @description
 * # BooksCtrl
 * Controller of the isbnCheckerApp
 */
angular.module('isbnCheckerApp')
  .controller('BooksCtrl', function ($routeParams, $scope, $http, $timeout, $location, APP_BASE_URL) {
    var storeID = $routeParams.store_id;
    console.log("bookstore id: ", storeID);

    $scope.bookstore = {};
    $scope.books = [];

    // pagination options
    $scope.limitOptions = [5, 10, 15, 20, {
      label: 'All',
      value: function () {
        return $scope.books ? $scope.books.length : 0;
      }
    }];

    $scope.query = {
      order: 'product_id',
      limit: 10,
      page: 1,
      filter: ''
    };

    // get bookstore information
    $http.get(APP_BASE_URL + 'bookstores?id=' + storeID).then(function(store) {
      $scope.bookstore = store.data[0];
      console.log($scope.bookstore);
    });

    // get books list
    $http.get(APP_BASE_URL + 'books?store_id=' + storeID).then(function(books) {
      $scope.books = books.data;
      console.log($scope.books);
    });

  });
