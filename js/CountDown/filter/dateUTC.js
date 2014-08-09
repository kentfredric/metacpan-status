angular.module('CountDown').filter('dateUTC',function(){
  return function(date) {
    if ( !date ) {
      return;
    }
    return date.toUTCString();
  };
});
