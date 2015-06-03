'use strict';

/**
 * @ngdoc function
 * @name tryMeanApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tryMeanApp
 */
angular.module('tryMeanApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
