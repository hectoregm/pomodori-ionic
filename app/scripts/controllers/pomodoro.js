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

  var poml, milis;
  poml = Settings.getSettings().pomodoroLength;
  milis = parseInt(poml) * 60 * 1000;
  $scope.timer = Date.now() + milis;

  Settings.all.$on('change', function() {
    poml = Settings.getSettings().pomodoroLength;
    console.log(poml);
    milis = parseInt(poml) * 60 * 1000;
    $scope.timer = Date.now() + milis;
    $scope.$broadcast('timer-start');
  });

  $scope.$on('timer-stopped', function() {
    $timeout(function() {
      Task.createPomodoro($stateParams.taskId);
      alert('Alert!!!');
    }, 1000);
  });
});
