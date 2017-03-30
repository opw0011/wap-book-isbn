'use strict';

/**
 * @ngdoc function
 * @name isbnCheckerApp.controller:BooksCtrl
 * @description
 * # BooksCtrl
 * Controller of the isbnCheckerApp
 */
angular.module('isbnCheckerApp')
  .controller('BooksCtrl', function ($routeParams, $scope, $http, $timeout, $location, $mdEditDialog, $mdDialog, APP_BASE_URL) {
    var storeID = $routeParams.store_id;
    console.log("bookstore id: ", storeID);

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

    $scope.addProduct = function (event) {
      event.stopPropagation();  // prevent auto check the row

       var parentEl = angular.element(document.body);
       $mdDialog.show({
         parent: parentEl,
         targetEvent: event,
         templateUrl: 'views/add-product-dialog.html',
         locals: {
           storeID: storeID
         },
         controller: 'AddProductCtrl'
      });
    }

    $scope.editQuantity = function (event, book) {
      event.stopPropagation();

      var promise = $mdEditDialog.large({
        title: "Edit product quantity",
        type: "number",
        modelValue: book.quantity,
        placeholder: 'Enter the new quantity',
        save: function (input) {
          book.quantity = input.$modelValue;
          console.log("ajax call ", book.id, book.product_id, book.store_id, book.quantity);

          // update the quantity
          $http.put(APP_BASE_URL + 'books/' + book.id, book).then(function(book) {
            console.log(book.data);
          });
        },
        targetEvent: event,
      });
    }

    $scope.deselectAll = function() {
      $scope.selectedBooks = [];
    }

    $scope.deleteAllSelected = function() {
      var count = $scope.selectedBooks.length;
      alert("Confirm deleting " + count + " items? ");

      // TODO: ajax batch DELETE
    }

    // get bookstore information
    $scope.reload = function() {
      // get books list
      $scope.promise = $http.get(APP_BASE_URL + 'books?store_id=' + storeID).then(function(books) {
        $scope.books = books.data;
        console.log($scope.books);
      });
    }

    function init() {
      $scope.bookstore = {};
      $scope.books = [];
      $scope.selectedBooks = [];

      $http.get(APP_BASE_URL + 'bookstores?id=' + storeID).then(function(store) {
        $scope.bookstore = store.data[0];
        console.log($scope.bookstore);
      });

      $scope.reload();
    }

    init();

  });
