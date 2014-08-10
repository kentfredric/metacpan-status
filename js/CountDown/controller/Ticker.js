angular.module('CountDown').controller('Ticker', ['$scope', '$interval', 'deadlines',
  function($scope, $interval, d) {

    function updater() {
      $scope.time = d.now();
      $scope.monthly = d.monthly();
      $scope.daily = d.daily();
      $scope.weekly = d.weekly();
    }
    $interval(updater, 500);
  }
]);
