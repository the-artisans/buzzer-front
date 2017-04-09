angular.module('buzzer').component('sideBar', {
  templateUrl: 'app/components/side-bar.component.html',
  bindings: {
    'open': '='
  },
  controller: ['$scope', '$element', function SideBarController($scope, $element, $location) {
    var TAB_FEED = 'feed';
    var TAB_MARKET = 'market';

    var ctrl = this;
    var activeTab = TAB_FEED;

    function tab(checkTab) {
      return activeTab === checkTab;
    }

    function setTab(newTab) {
      activeTab = newTab;
    }

    function closeMenu() {
      ctrl.open = false;
    }

    ctrl.tab = tab;
    ctrl.setTab = setTab;
    ctrl.closeMenu = closeMenu;
  }]
});