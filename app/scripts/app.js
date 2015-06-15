'use strict';

/**
 * @ngdoc overview
 * @name helloAngularjsApp
 * @description
 * # helloAngularjsApp
 *
 * Main module of the application.
 */
angular
  .module('helloAngularjsApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
