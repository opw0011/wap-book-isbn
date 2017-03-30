'use strict';

/**
 * @ngdoc overview
 * @name isbnCheckerApp
 * @description
 * # isbnCheckerApp
 *
 * Main module of the application.
 */
var app = angular
  .module('isbnCheckerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'md.data.table',
    'ng-mfb',
    'angular.filter'
  ]);

app.constant('APP_BASE_URL', 'http://127.0.0.1:3000/');

app.config(function ($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.html',
      controller: 'MainCtrl',
      controllerAs: 'main'
    })
    .when('/about', {
      templateUrl: 'views/about.html',
      controller: 'AboutCtrl',
      controllerAs: 'about'
    })
    .when('/purchase-new', {
      templateUrl: 'views/purchase-new.html',
      controller: 'PurchaseNewCtrl',
      controllerAs: 'purchaseNew'
    })
    .when('/purchase-refill', {
      templateUrl: 'views/purchase-refill.html',
      controller: 'PurchaseRefillCtrl',
      controllerAs: 'purchaseRefill'
    })
    .when('/books/:store_id', {
      templateUrl: 'views/books.html',
      controller: 'BooksCtrl',
      controllerAs: 'books'
    })
    .when('/orders', {
      templateUrl: 'views/orders.html',
      controller: 'OrdersCtrl',
      controllerAs: 'orders'
    })
    .when('/charts', {
      templateUrl: 'views/charts.html',
      controller: 'ChartsCtrl',
      controllerAs: 'charts'
    })
    .otherwise({
      redirectTo: '/'
    });

    $locationProvider.hashPrefix('');
});

/**
 * Global routing functions
 */
app.run(function($rootScope, $location) {
  $rootScope.clickLink = function(path) {
      $location.path(path);
    };
});