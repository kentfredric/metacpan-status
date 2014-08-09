angular.module('CountDown').filter('date', function() {
  return function(date) {
    if (!date) {
      return;
    }
    return date.toString();
  };
});
