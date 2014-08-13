angular.module('CountDown').directive('timer', ['$interval', '$log',
  function($interval, $log) {

    function x_now() {
      return new Date(Date.now());
    }

    function seconds(interval) {
      if (!interval) {
        return;
      }
      if (interval < 500) {
        return 0
      }
      return (interval / 1000).toFixed(1) + ' seconds';
    }

    function breakdown(interval) {
      if (!interval) {
        return;
      }
      if (interval < 1000) {
        return 0
      }
      var ms = interval % 1000;
      var seconds = (interval / 1000).toFixed(0);
      if (seconds < 60) {
        return seconds + ' seconds';
      }
      var minutes = (seconds / 60).toFixed(1);
      if (minutes < 60) {
        return minutes + ' minutes';
      }
      var hours = (minutes / 60).toFixed(1);
      if (hours < 24) {
        return hours + ' hours';
      }
      var days = (hours / 24).toFixed(1);
      return days + ' days';
    }


    function link(scope, iElement, iAttrs) {
      var timeoutId;

      if (!scope.label) {
        scope.label = "";
      }
      if (!scope.refresh) {
        scope.refresh = 500;
      }
      if (!scope.deadline) {
        scope.deadline = x_now();
      }

      scope.padding = (new Array(scope.label.length + 1).join(' '));

      function updateIntervals() {
        var now = x_now();
        if (scope.deadline) {
          scope.interval = scope.deadline - now;
          scope.intervalSeconds = seconds(scope.interval);
          scope.intervalBreakdown = breakdown(scope.interval);
        }
      }

      function updateTime() {
        var now = x_now();
        if (scope.deadline) {
          scope.date = scope.deadline.toString();
          scope.dateUTC = scope.deadline.toUTCString();
        }
        updateIntervals();
      }

      function spawnTimer() {
        timeoutId = $interval(function() {
          updateTime();
        }, scope.refresh);
      }

      function cancelTimer() {
        $interval.cancel(timeoutId);
      }

      iElement.on('$destroy', function() {
        $interval.cancel(timeoutId);
      });

      spawnTimer();
      updateTime();
    }

    return {
      restrict: 'E',
      scope: {
        label: '@',
        deadline: '=',
        refresh: '@'
      },
      link: link,
      templateUrl: 'partials/timer.html'
    };
  }
]);
