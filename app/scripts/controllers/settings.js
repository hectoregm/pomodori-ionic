'use strict';

app.controller('SettingsCtrl', function($scope, Settings) {
  $scope.settings = Settings.getSettings();
});
