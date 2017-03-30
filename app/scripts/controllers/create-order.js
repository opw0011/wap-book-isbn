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
  });
