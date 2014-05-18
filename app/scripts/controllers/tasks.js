'use strict';

app.controller('TasksCtrl', function ($scope, $ionicNavBarDelegate, metadata) {
  $scope.title = metadata.state;
  console.log('In Tasks');
  console.log('State: ' + metadata.state);
});
