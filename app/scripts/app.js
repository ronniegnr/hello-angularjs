'use strict';


var app = angular.module('tryMeanApp', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('main', {
            url: '/',
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
        })
        .state('about', {
            url: '/about',
            templateUrl: 'views/about.html',
            controller: 'AboutCtrl'
        });

    $urlRouterProvider.otherwise('home');
});


app.factory('posts', [function () {
    var object = {
        posts: []
    };
    return object;
}])


app.controller('TestCtrl', function($scope, posts) {

    $scope.posts = posts.posts;

    $scope.test = "test";

    $scope.posts = [
        {title: 'post 1', upvotes: 5},
        {title: 'post 2', upvotes: 4},
        {title: 'post 3', upvotes: 2},
        {title: 'post 4', upvotes: 1},
        {title: 'post 5', upvotes: 5}
    ];

    $scope.addPost = function() {
        if(!$scope.title || $scope.title==='') return;
        $scope.posts.push({
            title: $scope.title,
            link: $scope.link,
            upvotes: 0
            });
        $scope.title = '';
        $scope.link = '';
    };

    $scope.incrementUpvotes = function(post){
        post.upvotes += 1;
    };

});



