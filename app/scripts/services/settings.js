'use strict';

app.factory('Settings', function () {
  var settings = {
    pomodoro: '25',
    brake: '5'
  };

  var Settings = {
    getSettings: function() {
      return settings;
    }
  };

  return Settings;
});
