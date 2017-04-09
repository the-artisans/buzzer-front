angular.module('buzzer', ['ngRoute', 'ui.bootstrap'])
  .constant('API_BASE_URL', 'https://hidden-fjord-70987.herokuapp.com/')
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/dashboard', {
        name: 'dashboard',
        templateUrl: 'app/page-feed/feed.html',
        controller: 'FeedController'
      })
      .when('/manage', {
        name: 'manage',
        templateUrl: 'app/under-construction/under-construction.html',
        controller: 'UnderConstructionController'
      })
      .when('/report', {
        name: 'report',
        templateUrl: 'app/under-construction/under-construction.html',
        controller: 'UnderConstructionController'
      })
      .when('/friends', {
        name: 'friends',
        templateUrl: 'app/under-construction/under-construction.html',
        controller: 'UnderConstructionController'
      })
      .when('/popular', {
        name: 'popular',
        templateUrl: 'app/under-construction/under-construction.html',
        controller: 'UnderConstructionController'
      })
      .otherwise({ redirectTo: '/dashboard' });

    // configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(false);
  });