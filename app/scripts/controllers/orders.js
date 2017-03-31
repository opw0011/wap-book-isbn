'use strict';

/**
 * @ngdoc function
 * @name isbnCheckerApp.controller:OrdersCtrl
 * @description
 * # OrdersCtrl
 * Controller of the isbnCheckerApp
 */
angular.module('isbnCheckerApp')
  .controller('OrdersCtrl', function ($scope, $http, $timeout, $mdDialog, APP_BASE_URL) {


    // pagination options
    $scope.limitOptions = [5, 10, 25, 50, {
      label: 'All',
      value: function () {
        return $scope.orders ? $scope.orders.length : 0;
      }
    }];

    $scope.query = {
      order: 'name',
      limit: 10,
      page: 1,
      filter: ''
    };

    $scope.handleViewButtonClicked = function (id) {
      console.log("bookstore id: ", id);
    }

    $scope.reload = function(){
      $scope.promise = $http.get(APP_BASE_URL + 'orders').then(function (orders) {
        console.log(orders);
        $scope.orders = orders.data;
        //   $scope.promise = $timeout(function () {
        //       $scope.desserts = posts.data;
        // }, 1000);
      })
    }

    $scope.viewSelectedOrder = function(event, order) {
      event.stopPropagation();
      var parentEl = angular.element(document.body);
      $mdDialog.show({
        parent: parentEl,
        targetEvent: event,
        templateUrl: 'views/view-order-dialog.html',
        locals: {
          // bookstore: $scope.bookstore,
          // books: $scope.selectedBooks
          order: order
        },
        controller: 'ViewOrderCtrl'
      });
    }

    function init() {
      $scope.selected = [];
      $scope.orders = [];
      $scope.reload();
    }

    init();
  });
