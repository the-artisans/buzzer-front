angular.module('buzzer').component('userStockInfo', {
  templateUrl: 'app/feed-timeline/user-stock-info.component.html',
  bindings: {
  },
  controller: ['$scope', '$element', '$timeout',
    function UserStockInfoController($scope, $element, $timeout) {
      var user = {
        name: "Guilherme Ventura",
        occupation: "Software developer",
        emailHash: '4c63581802d04203e3f0ab00c72a2410'
      };

      $scope.userImgSrc = 'https://www.gravatar.com/avatar/' + user.emailHash + '?s=100';
      $scope.userName = user.name;
      $scope.userOccupation = user.occupation;
    }]
});