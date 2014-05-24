'use strict';

app.controller('PomodoroCtrl', function ($scope,
                                 $timeout,
                                 $stateParams,
                                 $ionicPlatform,
                                 Settings,
                                 Task) {
  console.log('In Pomodoro');
  $scope.tasks = Task.all;
  $scope.message = 'Work, Work!!';

  $scope.tasks.$on('loaded', function() {
    $scope.task = $scope.tasks[$stateParams.taskId];
  });

  var poml, milis, now, date, status, running;
  poml = Settings.getSettings().pomodoroLength;
  milis = parseInt(poml) * 60 * 1000;
  status = 'Working';

  date = new Date(Date.now() + milis);
  $scope.timer = Date.now() + milis;

  if (window.plugin) {
    window.plugin.notification.local.add({message: 'Test'});
    window.plugin.notification.local.add({
      id:      $stateParams.taskId,
      title:   'Pomodoro',
      message: 'Pomodoro finished, take a short break.',
      date:    date,
      sound:   'www/res/alarm.caf'
    });
  }

  $scope.updateTimer = function(miliseconds) {
    console.log('In updateTimer');

    document.getElementsByTagName('timer')[0].clear();
    $scope.timer = Date.now() + miliseconds;
    $scope.$digest();

    $timeout(function() {
      document.getElementsByTagName('timer')[0].start();
    }, 300);
  };

  $timeout(function() {
    $scope.$broadcast('timer-start');
  }, 300);

  $scope.$on('$destroy', function() {
    if (window.plugin) {
      window.plugin.notification.local.cancelAll(function () {
        // All notifications have been canceled
      }, $scope);
    }
  });

  var pomodoroEnded = function () {
    running = true;
    poml = Settings.getSettings().shortBreak;
    milis = parseInt(poml) * 60 * 1000;

    $scope.message = 'Take a short break.';
    $scope.updateTimer(milis);
    status = 'Relaxing';

    now = new Date().getTime();
    date = new Date(now + milis);

    if (window.plugin) {
      window.plugin.notification.local.add({
        id:      $stateParams.taskId + '1',
        title:   'Pomodoro',
        message: 'Short break has ended, get back to work.',
        date:    date,
        sound:   'www/res/alarm.caf'
      });
    }
  };

  var breakEnded = function() {
    $scope.message = 'Continue ?';
    $scope.continue = true;
    $scope.$digest();
    console.log('Really ended');
  };

  var callback = function() {
    if (status === 'Working') {
      Task.createPomodoro($stateParams.taskId);
      console.log('Pomodoro ended');

      //pomodoroEnded();

      if (navigator.notification) {
        navigator.notification.alert(
          'Pomodoro finished, take a short break.',
          pomodoroEnded,
          'Pomodoro',
          'Done'
        );
      } else {
        pomodoroEnded();
      }
    } else {
      console.log('Brake ended');
      //breakEnded();
      if (navigator.notification) {
        navigator.notification.alert(
          'Short break ended.',  // message
          breakEnded,            // callback
          'Pomodoro',            // title
          'Done'                 // buttonName
        );
      } else {
        breakEnded();
      }
    }
  };

  $scope.$on('timer-stopped', function() {
    console.log('Timer stopped');
    callback();
  });
});
