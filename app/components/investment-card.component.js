angular.module('buzzer').component('investmentCard', {
  templateUrl: 'app/components/investment-card.component.html',
  bindings: {
    'product': '<'
  },
  controller: ['$scope', '$route', '$location', function InvestmentCardController($scope, $route, $location) {
    var STATE_RESUMED = 'resumed';
    var STATE_PAUSED = 'paused';

    var ctrl = this;
    var currentState = STATE_RESUMED;

    function init() {
      ctrl.revenue = ctrl.product.currentPrice - ctrl.product.startPrice;
      ctrl.isPositive = ctrl.revenue >= 0;
    }

    function state(checkState) {
      return currentState === checkState;
    }

    function setState(newState) {
      currentState = newState;
    }

    function sign(number) {
      return number >= 0 ? '+' : '';
    }

    ctrl.$onInit = init;
    ctrl.state = state;
    ctrl.setState = setState;
    ctrl.sign = sign;
  }]
});