'use strict';

app.controller('PomodoroCtrl', function ($scope,
                                 $timeout,
                                 $stateParams,
                                 Settings,
                                 Task) {
  console.log($stateParams.taskId);
  $scope.tasks = Task.all;
  $scope.tasks.$on('loaded', function() {
    $scope.task = $scope.tasks[$stateParams.taskId];
  });

  var poml = Settings.getSettings().pomodoro;
  var milis = parseInt(poml) * 60 * 1000;
  $scope.timer = Date.now() + milis;
  $scope.$on('timer-stopped', function() {
    $timeout(function() {
      alert('Alert!!!');
    }, 1000);
  });
});
