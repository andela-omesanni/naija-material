angular.module('naijamaterial.directives')
  .directive('uiViewStyle', function() {
    return {
      restrict: 'A',
      controller: ['$scope', '$location',
        function($scope, $location) {

          if($location.path() === '/login')
            $scope.uiViewStyle = {'height': '100%'};
        }
      ]
    };
  });
