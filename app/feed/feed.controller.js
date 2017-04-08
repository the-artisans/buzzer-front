angular.module('buzzer')
  .controller('FeedController', ['$scope', 'FeedService', function FeedController($scope, FeedService, CategoryService) {

    function init() {
      fetchFeed();
    }

    function fetchFeed() {
    }

    init();
  }]);