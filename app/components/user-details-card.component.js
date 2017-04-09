angular.module('buzzer').component('userDetailsCard', {
  templateUrl: 'app/components/user-details-card.component.html',
  bindings: {
    'user': '<'
  },
  controller: ['$scope', '$route', '$location', function InvestmentCardController($scope, $route, $location) {
    var ctrl = this;
  }]
});