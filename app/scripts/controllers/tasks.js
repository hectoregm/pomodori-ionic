'use strict';

app.controller('TasksCtrl', function ($scope,
                              $ionicNavBarDelegate,
                              $location,
                              metadata,
                              Task) {
  $scope.title = metadata.state;
  console.log('State: ' + metadata.state);
  $scope.tasks = Task.all;

  $scope.startPomodoro = function (taskId) {
    console.log('TaskId: ' + taskId);
    $location.path('/tasks/' + taskId + '/pomodoro');
  };
});
