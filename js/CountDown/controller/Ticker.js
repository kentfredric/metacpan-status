angular.module('CountDown').controller('Ticker', ['$scope', '$interval', 'deadlines',
  function($scope, $interval, d) {

    function updater() {
      $scope.time = d.now();
      $scope.monthly = d.monthly();
      $scope.weekly = d.daily();
      $scope.daily = d.weekly();
    }
    $interval(updater, 500);
  }
]);
