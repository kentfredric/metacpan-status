angular.module('CountDown').factory('deadlines', function() {
  function now() {
    return new Date(Date.now());
  }

  function zeroday() {
    var ts = now();
    ts.setUTCMilliseconds(0);
    ts.setUTCSeconds(0);
    ts.setUTCMinutes(0);
    ts.setUTCHours(0);
    return ts;
  }

  function monthly() {
    var ts = zeroday();
    ts.setUTCDate(1);
    ts.setUTCMonth(ts.getUTCMonth() + 1);
    return ts;
  }

  function weekly() {
    var ts = zeroday();
    ts.setUTCDate(ts.getUTCDate() + (7 - ts.getUTCDay()));
    return ts;
  }

  function daily() {
    var ts = zeroday();
    ts.setUTCDate(ts.getUTCDate() + 1);
    return ts;
  }

  function cpanday_start() {
    var ts = zeroday();
    ts.setUTCDate(16);
    ts.setUTCMonth(7);
    if (ts.getTime() < now().getTime()) {
      ts.setUTCFullYear(ts.getUTCFullYear() + 1);
    }
    return ts;
  }

  function cpanday_end() {
    var ts = zeroday();
    ts.setUTCDate(17);
    ts.setUTCMonth(7);
    if (ts.getTime() < now().getTime()) {
      ts.setUTCFullYear(ts.getUTCFullYear() + 1);
    }
    return ts;
  }


  function interval(x) {
    return x.getTime() - now().getTime();
  }
  return {
    now: now,
    daily: daily,
    weekly: weekly,
    monthly: monthly,
    interval: interval,
    cpanday_start: cpanday_start,
    cpanday_end: cpanday_end
  };
});
