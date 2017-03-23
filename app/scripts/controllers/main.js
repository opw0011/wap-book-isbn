'use strict';

/**
 * @ngdoc function
 * @name isbnCheckerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the isbnCheckerApp
 */
angular.module('isbnCheckerApp')
  .controller('MainCtrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.book = null;

    $scope.search = function(isbn) {
      console.log(isbn);
      $http.get('https://www.googleapis.com/books/v1/volumes?q=isbn:' + isbn).then(function(res) {
        console.log(res.data);
        $scope.book = res.data;
      }, function(err) {
        console.log(err);
      });
    }


  });
