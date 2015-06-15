'use strict';

var app = angular.module('helloAngularjsApp', ['ngRoute']);

app.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl: '/hellos.html',
            controller: 'HelloController'
        })
        .when('/:id', {
            templateUrl: '/helloDetails.html',
            controller: 'HelloDetailsController'
        })
}]);

app.factory('hellos', function () {
    return [
        {name: 'one', completed: true, note: "one note"},
        {name: 'two', completed: true, note: "two note"},
        {name: 'three', completed: false, note: "three note"},
        {name: 'four', completed: true, note: "four note"}
    ];
});

app.controller('HelloController', ['$scope', 'hellos', function ($scope, hellos) {
    $scope.hellos = hellos;
}]);

app.controller('HelloDetailsController', ['$scope', '$routeParams', 'hellos', function($scope, $routeParams, hellos){
    $scope.hello = hellos[$routeParams.id];
}]);
