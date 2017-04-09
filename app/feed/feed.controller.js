angular.module('buzzer')
  .controller('FeedController', ['$scope', 'FeedService', function FeedController($scope, FeedService) {
    $scope.investments = [];

    function init() {
      fetchInvestments();
    }

    function fetchInvestments() {
      FeedService.allInvestments().then(function(data) {
        $scope.investments = data;
      });
    }

    init();
  }]);