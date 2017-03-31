'use strict';

/**
 * @ngdoc function
 * @name isbnCheckerApp.controller:PurchaseNewCtrl
 * @description
 * # PurchaseNewCtrl
 * Controller of the isbnCheckerApp
 */
angular.module('isbnCheckerApp')
  .controller('PurchaseNewCtrl', function ($scope, $http, $sce) {
    $scope.book = null;

    $scope.search = function(isbn) {
      console.log(isbn);
      var DOUBAN_BOOK_API = 'https://api.douban.com/v2/book/isbn/';

      var requestURL = DOUBAN_BOOK_API + isbn;
      $.ajax({
          url : requestURL,
          dataType : 'jsonp',
          jsonp: 'callback',
          success : function(res){ 
              // update the $scope variable
              $scope.$apply(function() {
                $scope.books = [];
                $scope.books.push(res);
              });
              console.log($scope.books);
          }   
      }); 
    };

    $scope.searchByKeyword = function(keyword) {
      console.log(keyword);

      var DOUBAN_BOOK_SEARCH_API = 'https://api.douban.com/v2/book/search?q=';
      var requestURL = DOUBAN_BOOK_SEARCH_API + keyword;
      $.ajax({
          url : requestURL,
          dataType : 'jsonp',
          jsonp: 'callback',
          success : function(res){ 
              // update the $scope variable
              $scope.$apply(function() {
                $scope.books = res.books;
              });
              console.log($scope.books);
          }   
      }); 
    };
  });
