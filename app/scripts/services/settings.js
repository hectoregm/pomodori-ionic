'use strict';

app.factory('Settings', function ($firebase, FIREBASE_URI) {
  var ref = new Firebase(FIREBASE_URI + 'settings');
  var data = $firebase(ref);

  var settings = {
    pomodoroLength: data.pomodoroLength || '1',
    shortBreak: data.shortBreak || '1'
  };

  data.$on('change', function() {
    settings.pomodoroLength = data.pomodoroLength;
    settings.shortBreak = data.shortBreak;
  });

  var Settings = {
    all: data,
    getSettings: function() {
      return settings;
    },
    saveSettings: function() {
      data.$update(settings);
    }
  };

  return Settings;
});
