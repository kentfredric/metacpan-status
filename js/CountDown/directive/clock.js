angular.module('CountDown').directive('clock', ['$interval',
  function($interval) {

    function link(scope, iElement, iAttrs) {
      var timeoutId;
      if (!scope.label) {
        scope.label = "";
      }
      if (!scope.refresh) {
        scope.refresh = 500;
      }

      scope.padding = (new Array(scope.label.length + 1).join(' '));

      function updateTime() {
        var now = new Date(Date.now());
        scope.date = now.toString();
        scope.dateUTC = now.toUTCString();
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
        refresh: '@'
      },
      link: link,
      templateUrl: 'partials/clock.html'
    };
  }
]);
