'use strict';

app.directive('submitOn', function() {
  return {
    link: function(scope, elm, attrs) {
      scope.$on(attrs.submitOn, function() {
        setTimeout(function() {
          elm.triggerHandler('submit');
        });
      });
    }
  };
});
