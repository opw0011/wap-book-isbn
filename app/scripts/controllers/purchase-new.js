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
      var GOOGLE_BOOK_API = "https://www.googleapis.com/books/v1/volumes?q=isbn:";
      var DOUBAN_BOOK_API = 'https://api.douban.com/v2/book/isbn/';
      // $http.get(GOOGLE_BOOK_API + isbn).then(function(res) {
      //   console.log(res.data);
      //   $scope.book = res.data;
      // }, function(err) {
      //   if(err) {
      //     console.log(err);
      //     document.alert('book not found');
      //   }
      // });
      var requestURL = DOUBAN_BOOK_API + isbn;
      $.ajax({
          url : requestURL,
          dataType : 'jsonp',
          jsonp: 'callback',
          success : function(res){ 
              // update the $scope variable
              $scope.$apply(function() {
                $scope.book = res;
              });
              console.log($scope.book);
          }   
      }); 
    };
  });
