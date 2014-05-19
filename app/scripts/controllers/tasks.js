'use strict';

app.controller('TasksCtrl', function ($scope,
                              $ionicNavBarDelegate,
                              metadata,
                              Task) {
  $scope.title = metadata.state;
  console.log('State: ' + metadata.state);
  $scope.tasks = Task.all;
});
