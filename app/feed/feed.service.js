angular.module('buzzer').service('FeedService', ['API_BASE_URL', '$http', function FeedService(API_BASE_URL, $http) {
  // API_BASE_URL is set as a constant on app.js
  var baseUrl = API_BASE_URL + 'feed';

  function mock() {
    return new Promise(res => res([{
      investmentName: 'AAPL',
      return: '+2.4%',
      amount: '+ $ 23,45',
      amountValue: 23.45,
      mimicking: 789 // an user id?
    }, {
      investmentName: 'MSFT',
      return: '+3%',
      amount: '+ $ 32,09',
      amountValue: 32.09,
      mimicking: null
    }, {
      investmentName: 'GOOG',
      return: '+1%',
      amount: '+ $ 510,23',
      amountValue: 510.23,
      mimicking: 12345 // an user id?
    }, {
      investmentName: 'SANM',
      return: '-0.12%',
      amount: '- $ 4,23',
      amountValue: -4.23,
      mimicking: null
    }, {
      investmentName: 'FB',
      return: '+29.32%',
      amount: '+ $ 301,11',
      amountValue: 301.11,
      mimicking: null
    }]));
  }

  this.allInvestments = function allInvestments() {
    return mock();
    // return $http.get(baseUrl).then(function onSuccess(response) {
    //   return response.data;
    // });
  }
}]);