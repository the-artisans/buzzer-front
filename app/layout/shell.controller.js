angular.module('buzzer')
  .controller('ShellController', ['$scope', '$route', '$location', function ShellController($scope, $route, $location) {

    function location(page) {
      return $route.current && $route.current.$$route.name === page;
    }

    function navigate(page) {
      switch (page) {
        case 'home':
          $location.path('/');
          break;
      }
    }

    $scope.location = location;
    $scope.navigate = navigate;
  }]);