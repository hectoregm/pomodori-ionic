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
    console.log('clicked Start');
    $location.path('/tasks/' + taskId + '/pomodoro');
  };

  $scope.moveToToday = function (taskId) {
    var task = Task.all[taskId];
    task.status = 'Today';
    Task.all.$save(taskId);
  };

  $scope.progress = function(done, total) {
    var pt = done / total;

    if (pt < 0.5) {
      return 'phaseOne';
    } else if (pt >= 0.5 || pt <= 0.75) {
      return 'phaseTwo';
    } else if (pt !== 1.0) {
      return 'phaseThree';
    } else {
      return 'phaseFour';
    }
  };
});
