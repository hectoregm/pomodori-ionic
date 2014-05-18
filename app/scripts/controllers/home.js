'use strict';

app.controller('HomeCtrl', function($scope, $ionicNavBarDelegate, $state) {
  console.log('In Home');
  $scope.state = $state;
});
