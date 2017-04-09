angular.module('buzzer').component('gravatarImage', {
  templateUrl: 'app/components/gravatar-image.component.html',
  bindings: {
    'hash': '@',
    'size': '@',
    'alt': '@'
  }
});