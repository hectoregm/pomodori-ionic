'use strict';

app.controller('PomodoroCtrl', function ($scope,
                                 $timeout,
                                 $stateParams,
                                 $ionicPlatform,
                                 Settings,
                                 Task) {
  console.log($stateParams.taskId);
  $scope.tasks = Task.all;

  $scope.tasks.$on('loaded', function() {
    $scope.task = $scope.tasks[$stateParams.taskId];
  });

  var poml, milis, now, date;
  // poml = Settings.getSettings().pomodoroLength;
  // milis = parseInt(poml) * 60 * 1000;
  // $scope.timer = Date.now() + milis;

  // Settings.all.$on('change', function() {
  //   poml = Settings.getSettings().pomodoroLength;
  //   console.log(poml);
  //   milis = parseInt(poml) * 60 * 1000;
  //   $scope.timer = Date.now() + milis;

  //   // var now = new Date().getTime();
  //   // var date = new Date(now + milis);

  //   //   window.plugin.notification.local.add({
  //   //     id:      $stateParams.taskId,
  //   //     title:   'Pomodoro',
  //   //     message: 'Pomodoro finished, take a short break.',
  //   //     date:    date,
  //   //     sound:   'www/res/alarm.caf'
  //   //   });

  //   $scope.$broadcast('timer-start');
  // });

  poml = Settings.getSettings().pomodoroLength;
  console.log(poml);
  milis = parseInt(poml) * 60 * 1000;
  console.log(milis);
  $scope.timer = Date.now() + milis;
  console.log($scope.timer);

  now = new Date().getTime();
  date = new Date(now + milis);

  $timeout(function() {
    $scope.$broadcast('timer-start');
  }, 300);


  if (window.plugin) {
    window.plugin.notification.local.add({
      id:      $stateParams.taskId,
      title:   'Pomodoro',
      message: 'Pomodoro finished, take a short break.',
      date:    date,
      sound:   'www/res/alarm.caf'
    });
  }

  var alertDismissed = function () {
    console.log('Alert');
  };

  $scope.$on('timer-stopped', function() {
    $timeout(function() {
      Task.createPomodoro($stateParams.taskId);
      navigator.notification.alert(
        'You are the winner!',  // message
        alertDismissed,         // callback
        'Game Over',            // title
        'Done'                  // buttonName
      );
    }, 1000);
  });
});
