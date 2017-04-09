angular.module('buzzer', ['ngRoute'])
  .constant('API_BASE_URL', 'http://api.url/')
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/dashboard', {
        name: 'dashboard',
        templateUrl: 'app/feed/feed.html',
        controller: 'FeedController'
      })
      .otherwise({ redirectTo: '/dashboard' });

    // configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(false);
  });