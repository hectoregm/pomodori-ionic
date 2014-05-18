'use strict';

app.controller('HomeCtrl', function($scope,
                             $ionicNavBarDelegate,
                             $state,
                             $ionicModal) {
  console.log('In Home');
  $scope.state = $state;

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
});
