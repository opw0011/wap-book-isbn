'use strict';

/**
 * @ngdoc function
 * @name isbnCheckerApp.controller:BooksCtrl
 * @description
 * # BooksCtrl
 * Controller of the isbnCheckerApp
 */
angular.module('isbnCheckerApp')
  .controller('BooksCtrl', function ($routeParams, $scope) {
    $scope.storeID = $routeParams.store_id;
    console.log("bookstore id: ", $scope.storeID);
    
  });
