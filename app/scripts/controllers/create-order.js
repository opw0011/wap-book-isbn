'use strict';

/**
 * @ngdoc function
 * @name isbnCheckerApp.controller:CreateOrderCtrl
 * @description
 * # CreateOrderCtrl
 * Controller of the isbnCheckerApp
 */
angular.module('isbnCheckerApp')
  .controller('CreateOrderCtrl', function ($scope, $mdDialog, $http, $filter, APP_BASE_URL, storeID, books) {
    $scope.closeDialog = function() {
      $mdDialog.hide();
    }

    $scope.books = books;

    console.log("dialog receive books: ", books);
  });
