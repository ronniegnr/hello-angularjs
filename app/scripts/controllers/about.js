'use strict';

/**
 * @ngdoc function
 * @name helloAngularjsApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the helloAngularjsApp
 */
angular.module('helloAngularjsApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
