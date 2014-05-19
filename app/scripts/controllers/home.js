'use strict';

app.controller('HomeCtrl', function($scope,
                             $ionicNavBarDelegate,
                             $state,
                             $ionicModal,
                             Task) {
  $scope.state = $state;

  $scope.triggerSubmit = function() {
    $scope.$broadcast('newTask');
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
