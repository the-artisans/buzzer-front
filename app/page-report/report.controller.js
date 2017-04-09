angular.module('buzzer')
  .controller('ReportController', ['$scope', 'FeedService', 'AuthFactory', '$routeParams', function ReportController($scope, FeedService, AuthFactory, $routeParams) {
    $scope.user = null;
    $scope.products = [{
      _id: '58e9f8fb3ffeffe83de2c3cb',
      name: 'AAPL',
      startTime: '1491494400000',
      startPrice: 144,
      mimickUser: Object.assign(AuthFactory.getLoggedUser(), {
        name: 'Guilherme Ventura',
        occupation: 'Front-end developer & investor as hobby',
        email: 'guilhermeventura2@gmail.com',
        emailHash: '4c63581802d04203e3f0ab00c72a2410'
      }),
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

    var userId = $routeParams.userId || AuthFactory.getLoggedUser()._id;

    function init() {
      fetchProfileData();
    }

    function fetchProfileData() {
      FeedService.userProfile(userId).then(function (data) {
        $scope.user = data.user;
      });
    }

    init();
  }]);