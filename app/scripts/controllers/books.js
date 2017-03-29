'use strict';

/**
 * @ngdoc function
 * @name isbnCheckerApp.controller:BooksCtrl
 * @description
 * # BooksCtrl
 * Controller of the isbnCheckerApp
 */
angular.module('isbnCheckerApp')
  .controller('BooksCtrl', function ($routeParams, $scope, $http, $timeout, APP_BASE_URL) {
    var storeID = $routeParams.store_id;
    console.log("bookstore id: ", storeID);

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

    $http.get(APP_BASE_URL + 'books?store_id=' + storeID).then(function(books) {
      $scope.books = books.data;
      console.log($scope.books, Array.isArray($scope.books));
    });
  });
