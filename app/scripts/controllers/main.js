'use strict';

/**
 * @ngdoc function
 * @name helloAngularjsApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the helloAngularjsApp
 */
angular.module('helloAngularjsApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
