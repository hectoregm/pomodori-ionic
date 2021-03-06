/* global app:true */
'use strict';

var app = angular.module('Pomodori', ['ionic', 'firebase', 'timer'])
  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      if(window.StatusBar) {
        StatusBar.styleDefault();
      }
    });
  });

app.constant('FIREBASE_URI', 'https://pomodori.firebaseio.com/');

app.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('pom', {
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
          return {state: 'Today'};
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
          return {state: 'Inventory'};
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
          return {state: 'History'};
        }
      }
    })
    .state('pom.pomodoro', {
      url: '/tasks/{taskId}/pomodoro',
      views: {
        'main': {
          controller: 'PomodoroCtrl',
          templateUrl: 'templates/pomodoro.html'
        }
      }
    })
    .state('pom.settings', {
      url: '/settings',
      views: {
        'main': {
          controller: 'SettingsCtrl',
          templateUrl: 'templates/settings.html'
        }
      }
    });

  $urlRouterProvider.otherwise('/home');
});
