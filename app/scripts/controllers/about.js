'use strict';

/**
 * @ngdoc function
 * @name tryMeanApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the tryMeanApp
 */
angular.module('tryMeanApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
