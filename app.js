'use strict';

angular.module('contactApp', ['ngRoute', 'LocalStorageModule'])


// route config
.config(function($routeProvider) {
    $routeProvider

    //Route for default home page
    .when('/', {
      templateUrl: 'home.html'
    })

    // Route for Add Page
    .when('/add', {
      title: 'Hello',
      templateUrl: 'add.html',
      controller: 'contactCtrl'
    })

    // Route for Edit Page
    .when('/edit/:id', {
      title: 'Hello',
      templateUrl: 'edit.html',
      controller: 'contactCtrl'
    })

    // Route for Details Page 
    .when('/:id', {
      title: 'Hello',
      templateUrl: 'details.html',
      controller: 'contactDetailsCtrl'
    })

    // Redirect to home page
    .otherwise({redirectTo: '/home'});
})

