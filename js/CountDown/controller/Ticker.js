angular.module('CountDown').controller('Ticker', ['$scope', '$interval', 'deadlines',
  function($scope, $interval, d) {

    function updater() {
      $scope.time = d.now();
      $scope.monthly = d.monthly();
      $scope.daily = d.daily();
      $scope.weekly = d.weekly();
      $scope.cpanday_start = d.cpanday_start();
      $scope.cpanday_end = d.cpanday_end();

    }
    $interval(updater, 500);
  }
]);
