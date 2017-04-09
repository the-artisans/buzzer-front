angular.module('buzzer').component('investmentCard', {
  templateUrl: 'app/components/investment-card.component.html',
  bindings: {
    'isPositive': '='
  },
  controller: ['$scope', '$route', '$location', function InvestmentCardController($scope, $route, $location) {
    var STATE_RESUMED = 'resumed';
    var STATE_PAUSED = 'paused';

    var ctrl = this;
    var currentState = $scope.isPositive ? STATE_RESUMED : STATE_PAUSED;

    function state(checkState) {
      return currentState === checkState;
    }

    function setState(newState) {
      currentState = newState;
    }

    ctrl.state = state;
    ctrl.setState = setState;
  }]
});