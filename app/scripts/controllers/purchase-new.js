'use strict';

/**
 * @ngdoc function
 * @name isbnCheckerApp.controller:PurchaseNewCtrl
 * @description
 * # PurchaseNewCtrl
 * Controller of the isbnCheckerApp
 */
angular.module('isbnCheckerApp')
  .controller('PurchaseNewCtrl', function ($scope, $http) {

    // pagination options
    $scope.limitOptions = [5, 10, 15, {
      label: 'All',
      value: function () {
        return $scope.books ? $scope.books.length : 0;
      }
    }];

    $scope.query = {
      order: '',
      limit: 5,
      page: 1,
      filter: ''
    };

    $scope.search = function(isbn) {
      console.log(isbn);
      var DOUBAN_BOOK_API = 'https://api.douban.com/v2/book/isbn/';

      var requestURL = DOUBAN_BOOK_API + isbn;
      $scope.promise = $.ajax({
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
      $scope.promise = $.ajax({
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

    $scope.orderSelectedItem = function(event) {
      event.stopPropagation();
      var parentEl = angular.element(document.body);
      $mdDialog.show({
        parent: parentEl,
        targetEvent: event,
        templateUrl: 'views/create-order-dialog.html',
        locals: {
          bookstore: $scope.bookstore,
          books: $scope.selectedBooks
        },
        controller: 'CreateOrderCtrl'
      });
    }

    function init() {
      $scope.books = [];
      $scope.selectedBooks = [];
    }

    init();

  });
