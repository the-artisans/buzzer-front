angular.module('buzzer')
  .controller('ShellController', ['$scope', 'AuthFactory', '$location', function ShellController($scope, AuthFactory, $location) {

    $scope.user = AuthFactory.getLoggedUser();
  }]);