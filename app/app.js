angular.module('MyKitchen', ['ngRoute', 'ngTagsInput'])
  .constant('API_BASE_URL', 'http://prova-front.dcide.info/api/')
  .config(function ($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        name: 'home',
        templateUrl: 'app/feed/feed.html',
        controller: 'FeedController'
      });

    // configure html5 to get links working on jsfiddle
    $locationProvider.html5Mode(false);
  });