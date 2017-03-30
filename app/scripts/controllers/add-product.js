'use strict';

/**
 * @ngdoc function
 * @name isbnCheckerApp.controller:AddProductCtrl
 * @description
 * # AddProductCtrl
 * Controller of the isbnCheckerApp
 */
angular.module('isbnCheckerApp')
  .controller('AddProductCtrl', function ($scope, $mdDialog, $http, APP_BASE_URL, storeID) {
    // $scope.items = items;
    console.log("Receive dialog param: ", storeID);

    $scope.closeDialog = function() {
      $mdDialog.hide();
    }

    $scope.createItem = function(book) {
      console.log(book);

      // add predefined value
      book.store_id = storeID;
      book.unit = "USD";

      // ajax POST request to create book item
      $http.post(APP_BASE_URL + 'books', book).then(function(book) {
        console.log(book.data);
        $mdDialog.hide();
      });
    }
  });
