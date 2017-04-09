angular.module('buzzer')
  .controller('FeedController', ['$scope', '$rootScope', 'FeedService', function FeedController($scope, $rootScope, FeedService) {
    $scope.overallReport = {};
    $scope.products = [];

    function init() {
      fetchDashboardData();
    }

    function fetchDashboardData() {
      FeedService.userDashboard().then(function(data) {
        $rootScope.infoBarData = data.overallReport;
        $scope.overallReport = data.overallReport;
        $scope.products = data.products;
      });
    }

    init();
  }]);