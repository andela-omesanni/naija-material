angular.module('naijamaterial.directives')
  .directive('sideNav', function() {
    return {
      restrict: 'A',
      controller: ['$scope', '$mdSidenav', '$mdUtil',
        function($scope, $mdSidenav, $mdUtil) {

          $scope.toggleSideNav = buildToggler('left');
          $scope.menuLinks = [
            {title: 'Home', icon: 'mdi-home', href: '/'},
            {title: 'Dashboard', icon: 'mdi-view-dashboard', href: '#'}, 
            {title: 'Friends', icon: 'mdi-account-multiple', href: '#'}, 
            {title: 'Messages', icon: 'mdi-message-text', href: '#'},
            {title: 'Logout', icon: 'mdi-exit-to-app', href: '#'}
          ];

          function buildToggler(navID) { 
            var debounceFn =  $mdUtil.debounce(function() {
              $mdSidenav(navID).toggle();
            });
            return debounceFn;
          }
        }
      ]
    };
  });
