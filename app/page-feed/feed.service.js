// dashboard service
angular.module('buzzer').service('FeedService', ['API_BASE_URL', '$http', 'AuthFactory', '$q', function FeedService(API_BASE_URL, $http, AuthFactory, $q) {
  // API_BASE_URL is set as a constant on app.js
  var baseUrl = API_BASE_URL + 'dashboard';

  function createMock(data) {
    return $q(res => res({
      data: data
    }));
  }

  function mockPostDashboard() {
    return createMock({
      result: {
        _id: '58e8d7e6a4f8e33ec891e709',
        overallReport: {
          _id: '58e9ff48666952f0d4399f46',
          standardDeviation: 0.1,
          averageRateOfRoi: 0.994,
          __v: 0
        },
        products: [{
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
        }]
      }
    });
  }

  this.userDashboard = function allInvestments() {
    var loggedUserId = AuthFactory.getLoggedUser()._id;
    return (
      // mockPostDashboard()
      $http.post(baseUrl, { userId: loggedUserId })
        .then(function onSuccess(response) {
          return response.data.result;
        })
    );
  }
}]);