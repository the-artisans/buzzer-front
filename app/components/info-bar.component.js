angular.module('buzzer').component('infoBar', {
  templateUrl: 'app/components/info-bar.component.html',
  bindings: {
    'user': '='
  },
  controller: ['$scope', '$route', '$location', function InfoBarController($scope, $route, $location) {
    var ctrl = this;
  }]
});