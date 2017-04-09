angular.module('buzzer')
  .controller('FeedController', ['$scope', 'FeedService', function FeedController($scope, FeedService) {
    $scope.overallReport = {};
    $scope.products = [];

    function init() {
      fetchDashboardData();
    }

    function fetchDashboardData() {
      FeedService.userDashboard().then(function(data) {
        $scope.overallReport = data.overallReport;
        $scope.products = data.products;
      });
    }

    init();
  }]);