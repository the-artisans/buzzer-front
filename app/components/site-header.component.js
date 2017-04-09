angular.module('buzzer').component('siteHeader', {
  templateUrl: 'app/components/site-header.component.html',
  bindings: {
    'user': '='
  },
  controller: ['$scope', '$route', '$location', function SiteHeaderController($scope, $route, $location) {
    var ctrl = this;
    ctrl.pages = [{
      icon: 'briefcase',
      route: 'dashboard',
      label: 'Dashboard'
    }, {
      icon: 'bar-chart',
      route: 'manage',
      label: 'Manage Investments'
    }, {
      icon: 'id-badge',
      route: 'report',
      label: 'My Report'
    }, {
      icon: 'users',
      route: 'friends',
      label: 'Friend Investors'
    }, {
      icon: 'diamond',
      route: 'popular',
      label: 'Popular investors'
    }]

    function location(page) {
      return $route.current && $route.current.$$route.name === page;
    }

    function navigate(page) {
      navigateByName(page);
    }

    function navigateByName(name) {
      // get an object with { name: routeConfig }
      var mapByName = Object.keys($route.routes)
        .reduce(function (obj, x) {
          obj[$route.routes[x].name] = $route.routes[x];
          return obj;
        }, {});

      var routeConfig = mapByName[name];
      if (routeConfig)
        $location.path(routeConfig.originalPath);
    }

    ctrl.location = location;
    ctrl.navigate = navigate;
  }]
});