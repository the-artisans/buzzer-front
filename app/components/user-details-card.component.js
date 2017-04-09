angular.module('buzzer').component('userDetailsCard', {
  templateUrl: 'app/components/user-details-card.component.html',
  bindings: {
    'user': '<'
  },
  controller: ['$scope', 'AuthFactory', '$location', function InvestmentCardController($scope, AuthFactory, $location) {
    var ctrl = this;

    function init() {
      ctrl.isMe = AuthFactory.getLoggedUser()._id === ctrl.user.id;
      ctrl.isPopular = true;
    }

    ctrl.$onInit = init;
  }]
});