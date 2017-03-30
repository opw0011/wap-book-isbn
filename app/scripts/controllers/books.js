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

    $scope.bookstore = {};
    $scope.books = [];
    $scope.selectedBooks = [];

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

      $scope.items = [1,2,3,45];
       var parentEl = angular.element(document.body);
       $mdDialog.show({
         parent: parentEl,
         targetEvent: event,
         template:
           '<md-dialog aria-label="List dialog">' +
           '  <md-dialog-content>'+
           '    <md-list>'+
           '      <md-list-item ng-repeat="item in items">'+
           '       <p>Number {{item}}</p>' +
           '      '+
           '    </md-list-item></md-list>'+
           '  </md-dialog-content>' +
           '  <md-dialog-actions>' +
           '    <md-button ng-click="closeDialog()" class="md-primary">' +
           '      Close Dialog' +
           '    </md-button>' +
           '  </md-dialog-actions>' +
           '</md-dialog>',
         locals: {
           items: $scope.items
         },
         controller: DialogController
      });

      function DialogController($scope, $mdDialog, items) {
        $scope.items = items;
        $scope.closeDialog = function() {
          $mdDialog.hide();
        }
      }
    
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

    // get bookstore information
    $http.get(APP_BASE_URL + 'bookstores?id=' + storeID).then(function(store) {
      $scope.bookstore = store.data[0];
      console.log($scope.bookstore);
    });

    // get books list
    $http.get(APP_BASE_URL + 'books?store_id=' + storeID).then(function(books) {
      $scope.books = books.data;
      console.log($scope.books);
    });

  });
