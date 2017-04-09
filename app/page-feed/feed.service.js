// dashboard service
angular.module('buzzer').service('FeedService', ['API_BASE_URL', '$http', 'AuthFactory', '$q', function FeedService(API_BASE_URL, $http, AuthFactory, $q) {
  // API_BASE_URL is set as a constant on app.js
  var baseUrl = API_BASE_URL;

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

  function mockPostProfile() {
    return createMock({
      result:
      {
        user:
        {
          _id: '58e8d7e6a4f8e33ec891e709',
          name: 'John Doe',
          email: 'john.doe@gmail.com',
          occupation: 'Software Developer @ Cisco',
          __v: 6,
          overallReport: [Object],
          deleted: false,
          portfolios: [],
          products: [Object],
          availableAmount: 0,
          mimicking: [],
          mimickedCount: 0,
          following: [],
          followerCount: 0,
          emailHash: 'e13743a7f1db7f4246badd6fd6ff54ff',
          id: '58e8d7e6a4f8e33ec891e709',
          followingCount: 0,
          mimickingCount: 0,
          investmentAmount: 1327.35
        },
        benchmark: 0.001995216041993
      }
    });
  }

  this.userDashboard = function allInvestments() {
    var loggedUserId = AuthFactory.getLoggedUser()._id;
    return (
      // mockPostDashboard()
      $http.post(baseUrl + 'dashboard', { userId: loggedUserId })
        .then(function onSuccess(response) {
          return response.data.result;
        })
    );
  }

  this.userProfile = function userDashboard(user) {
    user = user || AuthFactory.getLoggedUser();
    return (
      // mockPostProfile()
      $http.post(baseUrl + 'profile', { userId: user._id })
        .then(function onSuccess(response) {
          return response.data.result;
        })
    );
  }
}]);