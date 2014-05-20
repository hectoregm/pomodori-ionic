'use strict';

app.controller('HomeCtrl', function($scope,
                             $ionicNavBarDelegate,
                             $state,
                             $location,
                             $ionicModal,
                             Task) {
  $scope.state = $state;

  $scope.triggerSubmit = function() {
    $scope.$broadcast('newTask');
  };

  $scope.startPomodoro = function (taskId) {
    console.log('TaskId: ' + taskId);
    $location.path('/tasks/foo/pomodoro');
  };

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
    Task.create(task);
    $scope.taskModal.hide();
  };
});
