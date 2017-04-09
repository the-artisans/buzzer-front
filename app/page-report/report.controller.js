angular.module('buzzer')
  .controller('ReportController', ['$scope', 'FeedService', 'AuthFactory', function ReportController($scope, FeedService, AuthFactory) {
    $scope.user = null;
    $scope.products = [{
      _id: '58e9f8fb3ffeffe83de2c3cb',
      name: 'AAPL',
      startTime: '1491494400000',
      startPrice: 144,
      mimickUser: AuthFactory.getLoggedUser(),
      unitNumber: 1,
      rateOfRoi: 0.0995,
      __v: 0,
      sold: false
    }, {
      _id: '58e9fad0820d04e951577c10',
      name: 'AAON',
      startTime: '1491494400000',
      startPrice: 34.5,
      // endPrice: 34.3, // didn't sell, no endPrice
      mimickUser: null,
      unitNumber: 34.3,
      rateOfRoi: -0.006,
      __v: 0,
      sold: false
    }];

    function init() {
      fetchProfileData();
    }

    function fetchProfileData() {
      FeedService.userProfile().then(function(data) {
        $scope.user = data.user;
      });
    }

    init();
  }]);