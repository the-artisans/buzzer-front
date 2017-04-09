angular.module('buzzer').component('infoBar', {
  templateUrl: 'app/components/info-bar.component.html',
  bindings: {
    overallRate: '<',
    activeFilter: '<',
    onFilterChange: '&'
  },
  controller: ['$scope', '$interval', '$filter', function InfoBarController($scope, $interval, $filter) {
    var DATE_FORMAT = 'MMMM D, YYYY - h:mm A';
    var FILTER_ALL = 'all_investments';
    var FILTER_MINE = 'own_investments';
    var FILTER_MIMICK = 'mimicked_investments';

    var ctrl = this;
    var activeFilter = ctrl.activeFilter = FILTER_ALL;

    ctrl.currentTime = '';
    ctrl.gainsCount = 11;
    ctrl.lossesCount = 13;
    ctrl.initialAmount = 3000;
    ctrl.currentAmount = 3000;
    ctrl.averagePerformance = 49.45;

    function init() {
      updateTime();
      $interval(updateTime, 1000 * 15); // delay 15 seconds
      console.log('init');
    }

    function updateTime() {
      var now = moment();
      ctrl.currentTime = now.format(DATE_FORMAT);
      ctrl.currentTimeISO = now.format();
    }

    function sign(number) {
      return number >= 0 ? '+' : '';
    }

    function filter(filter) {
      return activeFilter === filter;
    }

    function setFilter(filter) {
      activeFilter = filter;

      ctrl.onFilterChange && ctrl.onFilterChange(ctrl.activeFilter = activeFilter);
    }

    function filterText(filter) {
      switch (filter) {
        case FILTER_ALL:
          return 'All investments';
        case FILTER_MINE:
          return 'My own investments';
        case FILTER_MIMICK:
          return 'My mimick investments';
      }
    }

    function activeFilterText(filter) {
      return filterText(activeFilter);
    }
    
    init();

    ctrl.sign = sign;
    ctrl.filter = filter;
    ctrl.setFilter = setFilter;
    ctrl.filterText = filterText;
    ctrl.activeFilterText = activeFilterText;
  }]
});