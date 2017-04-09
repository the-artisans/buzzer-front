angular.module('buzzer').component('investmentCard', {
  templateUrl: 'app/components/investment-card.component.html',
  bindings: {
    'investment': '<'
  },
  controller: ['$scope', '$route', '$location', function InvestmentCardController($scope, $route, $location) {
    var STATE_RESUMED = 'resumed';
    var STATE_PAUSED = 'paused';

    var ctrl = this;
    var currentState = STATE_RESUMED;

    function state(checkState) {
      return currentState === checkState;
    }

    function setState(newState) {
      currentState = newState;
    }

    function isPositive() {
      return ctrl.investment.amountValue > 0;
    }

    ctrl.state = state;
    ctrl.setState = setState;
    ctrl.isPositive = isPositive;
  }]
});