/* global app:true */
'use strict';

var app = angular.module('Pomodori', ['ionic'])
  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  });

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('pom', {
      url: '/pom',
      abstract: true,
      templateUrl: 'templates/layout.html'
    })
    .state('pom.home', {
      url: '/home',
      views: {
        'main': {
          controller: 'HomeCtrl',
          templateUrl: 'templates/home.html'
        }
      }
    })
    .state('pom.today', {
      url: '/today',
      views: {
        'main': {
          controller: 'TasksCtrl',
          templateUrl: 'templates/tasks.html'
        }
      },
      resolve: {
        metadata: function () {
          return {state: 'today'};
        }
      }
    })
    .state('pom.inventory', {
      url: '/inventory',
      views: {
        'main': {
          controller: 'TasksCtrl',
          templateUrl: 'templates/tasks.html'
        }
      },
      resolve: {
        metadata: function () {
          return {state: 'inventory'};
        }
      }
    })
    .state('pom.history', {
      url: '/history',
      views: {
        'main': {
          controller: 'TasksCtrl',
          templateUrl: 'templates/tasks.html'
        }
      },
      resolve: {
        metadata: function () {
          return {state: 'history'};
        }
      }
    });

  $urlRouterProvider.otherwise('/pom/home');
});
