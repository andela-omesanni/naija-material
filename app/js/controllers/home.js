angular.module('naijamaterial.controllers')
  .controller('HomeCtrl', ['$scope',
    function($scope) {

      $scope.categories = [
        {name: 'Entertainment', icon: 'movie.png'},
        {name: 'Science & Technology', icon: 'science.png'},
        {name: 'Arts', icon: 'arts.png'}, 
        {name: 'General', icon: 'general.png'}
      ];

      $scope.logout = function() {
        // Authentication.logout();
        // $state.go('login');
      };
    }
]);