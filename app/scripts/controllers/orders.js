'use strict';

/**
 * @ngdoc function
 * @name isbnCheckerApp.controller:OrdersCtrl
 * @description
 * # OrdersCtrl
 * Controller of the isbnCheckerApp
 */
angular.module('isbnCheckerApp')
  .controller('OrdersCtrl', function ($scope, $location, $http, $timeout, $mdDialog, APP_BASE_URL) {

    // pagination options
    $scope.limitOptions = [5, 10, 25, 50, {
      label: 'All',
      value: function () {
        return $scope.orders ? $scope.orders.length : 0;
      }
    }];

    $scope.query = {
      order: 'createAt',
      limit: 10,
      page: 1,
      filter: ''
    };

    $scope.handleViewButtonClicked = function (id) {
      console.log("bookstore id: ", id);
    }

    $scope.reload = function(){

      // see if there are any filter param in the url
      var additionalParams;
      if($location.search() != null) {
        additionalParams = '?';

        if($location.search().storeid) {
          additionalParams += ('storeid=' +  $location.search().storeid)
        }

        if($location.search().status) {
          if(additionalParams != '?') additionalParams += '&';
          additionalParams += ('status=' +  $location.search().status)
        }
      }

      $scope.promise = $http.get(APP_BASE_URL + 'orders' + additionalParams).then(function (orders) {
        console.log(orders);
        $scope.orders = orders.data;
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
