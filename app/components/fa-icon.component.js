angular.module('buzzer').component('faIcon', {
  templateUrl: 'app/components/fa-icon.component.html',
  transclude: true,
  bindings: {
    'icon': '@'
  }
});