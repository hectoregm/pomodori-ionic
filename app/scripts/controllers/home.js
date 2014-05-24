'use strict';

app.controller('HomeCtrl', function($scope,
                             $ionicNavBarDelegate,
                             $state,
                             $location,
                             $ionicModal,
                             $filter,
                             Task) {
  $scope.state = $state;

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
