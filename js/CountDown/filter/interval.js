angular.module('CountDown').filter('interval',['deadlines', function(deadlines){
  return function(date) {
    if (!date) {
      return;
    }
    return deadlines.interval(date);
  }
}]);
