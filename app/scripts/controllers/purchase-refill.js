'use strict';

/**
 * @ngdoc function
 * @name isbnCheckerApp.controller:PurchaseRefillCtrl
 * @description
 * # PurchaseRefillCtrl
 * Controller of the isbnCheckerApp
 */
angular.module('isbnCheckerApp')
  .controller('PurchaseRefillCtrl', function ($scope, $http, $timeout) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.selected = [];
    $scope.bookstores = [];

    // pagination options
    $scope.limitOptions = [5, 10, 15, {
      label: 'All',
      value: function () {
        return $scope.bookstores ? $scope.bookstores.count : 0;
      }
  }];
    
    $scope.query = {
      order: 'name',
      limit: 5,
      page: 1
    };
    
    function success(bookstores) {
      $scope.bookstores = bookstores;
    }
    
    const BASE_URL = "http://127.0.0.1:3000/";

    $scope.getDesserts = function () {
      
      // $scope.promise = $nutrition.desserts.get($scope.query, success).$promise;
    };
    $http.get(BASE_URL + 'bookstores').then(function(boostores) {
      console.log(boostores);
      $scope.bookstores = boostores.data;
    //   $scope.promise = $timeout(function () {
    //       $scope.desserts = posts.data;
    // }, 1000);
    })

  });
