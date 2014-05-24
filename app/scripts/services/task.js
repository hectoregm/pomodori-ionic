'use strict';

app.factory('Task', function ($firebase, FIREBASE_URI, $filter) {
  var ref = new Firebase(FIREBASE_URI + 'tasks');
  var tasks = $firebase(ref);
  var temp = $firebase(ref);


  var total = {
    today: 0,
    inventory: 0,
    history: 0
  };

  tasks.$on('change', function() {
    total.today = 0;
    total.inventory = 0;
    total.history = 0;
    var array = [];

    angular.extend(array, $filter('orderByPriority')(temp));
    angular.forEach(array, function(task) {
      if (task.status === 'Today') {
        total.today = total.today + 1;
      } else if (task.status === 'Inventory') {
        total.inventory = total.inventory + 1;
      } else {
        total.history = total.history + 1;
      }
    });
  });

  var Task = {
    all: tasks,
    create: function (task) {
      task.status = 'Inventory';
      task.pomodoros = 0;
      return tasks.$add(task);
    },
    getTotals: function() {
      return total;
    },
    createPomodoro: function(taskId) {
      var task = Task.all[taskId];
      var count = task.pomodoros || 0;
      Task.all.$child(taskId).$update({pomodoros: count + 1});
    }
  };

  return Task;
});
