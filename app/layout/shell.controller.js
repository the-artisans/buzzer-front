angular.module('buzzer')
  .controller('ShellController', ['$scope', '$route', '$location', function ShellController($scope, $route, $location) {

    $scope.user = {
      name: 'Guilherme Ventura',
      email: 'guilhermeventura2@gmail.com',
      emailHash: '4c63581802d04203e3f0ab00c72a2410'
    };
  }]);