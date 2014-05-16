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
