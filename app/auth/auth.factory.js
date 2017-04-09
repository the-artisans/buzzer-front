angular.module('buzzer').factory('AuthFactory', ['$http', function AuthFactory($http) {
  return {
    getLoggedUser: function () {
      return {
        _id: '58e8d7e6a4f8e33ec891e709',
        name: 'Guilherme Ventura',
        occupation: 'Front-end developer & Investor as hobby',
        email: 'guilhermeventura2@gmail.com',
        emailHash: '4c63581802d04203e3f0ab00c72a2410'
      }
    }
  }
}]);