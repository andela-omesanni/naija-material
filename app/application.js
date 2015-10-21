/* define our modules */
angular.module('naijamaterial.services', ['firebase','ngCookies']);
angular.module('naijamaterial.filters', []);
angular.module('naijamaterial.directives', ['monospaced.elastic']);
angular.module('naijamaterial.controllers', []);

/* load services */
require('./js/services/authentication.js');
require('./js/services/refs.js');
require('./js/services/toast.js');

/* load filters */
require('./js/filters/reverse.js');

/* load directives */

/* load controllers */
require('./js/controllers/home.js');
require('./js/controllers/login.js');
require('./js/controllers/menu.js');

window.NaijaMaterial = angular.module("NaijaMaterial", [
  'ui.router',
  'naijamaterial.controllers',
  'naijamaterial.directives',
  'naijamaterial.filters',
  'naijamaterial.services',
  'ngAnimate',
  'ngMaterial'
]);

NaijaMaterial.run(['$rootScope', '$state', 'Toast',
  function($rootScope, $state, Toast) {
    $rootScope._ = window._;
    $rootScope.moment = window.moment;
  }
]);

/* application routes */
NaijaMaterial.config(['$stateProvider','$locationProvider',
 function($stateProvider, $locationProvider) {
  $locationProvider.html5Mode(true);
  
  $stateProvider
    .state('login', {
      url: '/',
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
    })
    .state('default', {
      url: '/home',
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
    });
}]);