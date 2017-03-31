'use strict';

/**
 * @ngdoc function
 * @name isbnCheckerApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the isbnCheckerApp
 */
angular.module('isbnCheckerApp')
  .controller('MainCtrl', function ($scope, $http, $location) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.book = null;

    $scope.search = function(isbn) {
      console.log(isbn);
      
      // const GOOGLE_BOOK_API = "https://www.googleapis.com/books/v1/volumes?q=isbn:";
      var DOUBAN_BOOK_API = 'https://api.douban.com/v2/book/isbn/';

      $http.get(DOUBAN_BOOK_API + isbn).then(function(res) {
        console.log(res.data);
        $scope.book = res.data;
      }, function(err) {
        if(err) {
          console.log(err);
          document.alert('book not found');
        }
      });
    };

    $scope.test = function() {
      $location.path('/orders').search({ 'storeid' : 1, 'status' : 0 });
    }


  });
