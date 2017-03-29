'use strict';

/**
 * @ngdoc function
 * @name isbnCheckerApp.controller:PurchaseRefillCtrl
 * @description
 * # PurchaseRefillCtrl
 * Controller of the isbnCheckerApp
 */
angular.module('isbnCheckerApp')
  .controller('PurchaseRefillCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.selected = [];
    
    $scope.query = {
      order: 'name',
      limit: 5,
      page: 1
    };
    
    function success(desserts) {
      $scope.desserts = desserts;
    }
    
    $scope.getDesserts = function () {
      // $scope.promise = $nutrition.desserts.get($scope.query, success).$promise;
    };

  });
