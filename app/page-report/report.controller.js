angular.module('buzzer')
  .controller('ReportController', ['$scope', 'FeedService', function ReportController($scope, FeedService) {
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