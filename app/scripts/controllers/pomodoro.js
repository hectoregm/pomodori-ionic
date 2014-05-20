'use strict';

app.controller('PomodoroCtrl', function ($scope,
                                 metadata,
                                 $timeout,
                                 $stateParams,
                                 Task) {
  console.log($stateParams.taskId);
  $scope.tasks = Task.all;
  $scope.countdown = '1500';
  $scope.$on('timer-stopped', function() {
    $timeout(function() {
      alert('Alert!!!');
    }, 1000);
  });
});
