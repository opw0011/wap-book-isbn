'use strict';

/**
 * @ngdoc overview
 * @name isbnCheckerApp
 * @description
 * # isbnCheckerApp
 *
 * Main module of the application.
 */
angular
  .module('isbnCheckerApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'md.data.table'
  ])
  .config(function ($routeProvider, $locationProvider) {
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
      .otherwise({
        redirectTo: '/'
      });

      $locationProvider.hashPrefix('');
  });
