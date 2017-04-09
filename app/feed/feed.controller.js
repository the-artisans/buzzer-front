angular.module('buzzer')
  .controller('FeedController', ['$scope', 'FeedService', function FeedController($scope, FeedService, CategoryService) {


    $scope.data = [{
      isPositive: true
    }, {
      isPositive: false
    }, {
      isPositive: true
    }, {
      isPositive: false
    }, {
      isPositive: true
    }, {
      isPositive: false
    }, {
      isPositive: true
    }, {
      isPositive: false
    }, {
      isPositive: true
    }, {
      isPositive: false
    }, {
      isPositive: true
    }, {
      isPositive: false
    }, {
      isPositive: true
    }, {
      isPositive: false
    }];

    function init() {
      fetchFeed();
    }

    function fetchFeed() {
    }

    init();
  }]);