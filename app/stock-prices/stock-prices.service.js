angular.module('buzzer').service('StocPricesService', ['API_BASE_URL', '$http',
  function StocPricesService(API_BASE_URL, $http) {
    var baseUrl = API_BASE_URL + 'Comentarios';

    this.symbol = function symbol(id) {
      return $http.get('https://www.quandl.com/api/v3/datasets/WIKI/SANM.json?start_date=2017-01-01&end_date=2017-01-03&order=asc&column_index=4&transformation=rdiff&api_key=NbN_oFgCzVz3PYUwWyuP').then(function onSuccess(response) {
        return response.data;
      });
    }
  }]);