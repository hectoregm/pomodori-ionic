'use strict';

app.factory('Task', function ($firebase, FIREBASE_URI) {
  var ref = new Firebase(FIREBASE_URI + 'tasks');
  var tasks = $firebase(ref);

  var Task = {
    all: tasks,
    create: function (task) {
      task.status = 'Inventory';
      return tasks.$add(task);
    }
  };

  return Task;
});
