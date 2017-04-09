angular.module('buzzer')
  .controller('ShellController', ['$scope', 'AuthFactory', '$rootScope', function ShellController($scope, AuthFactory, $rootScope) {
    $scope.infoBarData = {};

    $rootScope.$watch('infoBarData', function(oldVal, newVal) {
      $scope.infoBarData = $rootScope.infoBarData;
    });

    $scope.user = AuthFactory.getLoggedUser();
  }]);