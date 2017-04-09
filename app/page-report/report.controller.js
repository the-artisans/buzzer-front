angular.module('buzzer')
  .controller('ReportController', ['$scope', 'FeedService', 'AuthFactory', function ReportController($scope, FeedService, AuthFactory) {
    $scope.user = AuthFactory.getLoggedUser();

    function init() {
    }

    function fetchDashboardData() {
    }

    init();
  }]);