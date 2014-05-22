'use strict';

app.controller('HomeCtrl', function($scope,
                             $ionicNavBarDelegate,
                             $state,
                             $location,
                             $ionicModal,
                             $filter,
                             Task) {
  $scope.state = $state;
  console.log('In Home');

  $scope.triggerSubmit = function() {
    $scope.$broadcast('newTask');
  };

  $scope.task = { estimate: 1 };

  $scope.triggerEstimate = function(estimate) {
    $scope.task.estimate = estimate;
  };

  $scope.estimates = [1,2,3,4];

  $scope.isActive = function(estimate) {
    return $scope.task.estimate === estimate;
  };

  $scope.startPomodoro = function (taskId) {
    console.log('TaskId: ' + taskId);
    $location.path('/tasks/foo/pomodoro');
  };

  $scope.notification = function() {
    var now                  = new Date().getTime(),
    oneMinute = new Date(now + 60*1000);
    window.plugin.notification.local.add({ message: 'Great app!' });
    window.plugin.notification.local.add({
      id:      1,
      title:   'Reminder',
      message: 'Dont forget to buy some flowers',
      date:    oneMinute,
      sound: 'www/res/alarm.caf'
    });
  };

  $scope.total = Task.getTotals();

  $ionicModal.fromTemplateUrl('templates/new-task.html', function(modal) {
    $scope.taskModal = modal;
  }, {
    scope: $scope
  });

  $scope.newTask = function() {
    $scope.taskModal.show();
  };

  $scope.closeNewTask = function() {
    $scope.taskModal.hide();
  };

  $scope.createTask = function (task) {
    Task.create(task).then(function() {
      $scope.task = { title: '', estimate: 1};
    });
    $scope.taskModal.hide();
  };
});
