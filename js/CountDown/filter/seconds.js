angular.module('CountDown').filter('seconds',['deadlines', function(deadlines){
  return function(interval) {
    if (!interval) {
      return;
    }
    if ( interval < 1000 ) { return 0 }
    return (interval / 1000).toFixed(1) + ' seconds';
  }
}]);
