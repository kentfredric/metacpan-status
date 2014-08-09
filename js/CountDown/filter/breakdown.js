angular.module('CountDown').filter('breakdown',['deadlines', function(deadlines){
  return function(interval) {
    if (!interval) {
      return;
    }
    if ( interval < 1000 ) { return 0 }
    var ms = interval % 1000;
    var seconds = (interval / 1000).toFixed(0);
    if ( seconds < 60 ) {
      return seconds + ' seconds';
    }
    var minutes = (seconds / 60).toFixed(1);
    if ( minutes < 60 ){ 
      return minutes + ' minutes';
    }
    var hours = (minutes/ 60).toFixed(1);
    if ( hours < 24 ) {
      return hours + ' hours';
    }
    var days = (hours/24).toFixed(1);
    return days + ' days';
  }
}]);
