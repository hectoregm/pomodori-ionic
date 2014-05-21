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
    console.log("Broadcasting newTask event");
    $scope.$broadcast('newTask');
  };

  $scope.task = { estimate: 1 };

  $scope.triggerEstimate = function(estimate) {
    $scope.task.estimate = estimate;
  };

  $scope.estimates = [1,2,3,4];

  $scope.isActive = function(estimate) {
    return $scope.task.estimate === estimate;
  }

  $scope.startPomodoro = function (taskId) {
    console.log('TaskId: ' + taskId);
    $location.path('/tasks/foo/pomodoro');
  };

  var total = {
    today: 0,
    inventory: 0,
    history: 0
  };

  var tasks = Task.all;

  tasks.$on('change', function() {
    total.today = 0;
    total.inventory = 0;
    total.history = 0;
    var array = [];

    angular.extend(array, $filter('orderByPriority')(tasks));
    angular.forEach(array, function(task) {
      console.log(task);
      if (task.status === 'Today') {
        total.today = total.today + 1;
      } else if (task.status === 'Inventory') {
        total.inventory = total.inventory + 1;
      } else {
        total.history = total.history + 1;
      }
    });

    console.log(total);
  });

  $scope.total = total;

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
