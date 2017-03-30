'use strict';

/**
 * @ngdoc function
 * @name isbnCheckerApp.controller:PurchaseRefillCtrl
 * @description
 * # PurchaseRefillCtrl
 * Controller of the isbnCheckerApp
 */
angular.module('isbnCheckerApp')
  .controller('PurchaseRefillCtrl', function ($scope, $http, $timeout, APP_BASE_URL) {

    $scope.selected = [];
    $scope.bookstores = [];

    // pagination options
    $scope.limitOptions = [5, 10, 25, 50, {
      label: 'All',
      value: function () {
        return $scope.bookstores ? $scope.bookstores.length : 0;
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
      $scope.promise = $http.get(APP_BASE_URL + 'bookstores').then(function (boostores) {
        console.log(boostores);
        $scope.bookstores = boostores.data;
        //   $scope.promise = $timeout(function () {
        //       $scope.desserts = posts.data;
        // }, 1000);
      })
    }

    function init() {
      $scope.reload();
    }

    init();

  });
