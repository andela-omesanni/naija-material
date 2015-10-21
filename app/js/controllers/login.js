angular.module('naijamaterial.controllers')
.controller('LoginCtrl', ['$scope', 
  function($scope, Authentication) {
    
    $scope.login = function() {
      Authentication.login();
    };
  }
]);
