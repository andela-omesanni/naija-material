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
require('./js/directives/sideNav.js');
require('./js/directives/uiViewStyle.js')

/* load controllers */
require('./js/controllers/home.js');
require('./js/controllers/login.js');
require('./js/controllers/menu.js');
require('./js/controllers/forumCategory.js');

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
NaijaMaterial.config(['$stateProvider','$locationProvider', '$mdThemingProvider',
 function($stateProvider, $locationProvider, $mdThemingProvider) {
  $locationProvider.html5Mode(true);

  var customBlueMap = $mdThemingProvider.extendPalette('light-blue', {
    'contrastDefaultColor': 'light',
    'contrastDarkColors': ['50'],
    '50': 'ffffff'
  });

  $mdThemingProvider.definePalette('customBlue', customBlueMap);
  $mdThemingProvider.theme('ranger')
    .primaryPalette('customBlue', {
      'default': '500',
      'hue-1': '50'
    })
  
  $stateProvider
    .state('login', {
      url: '/login',
      templateUrl: 'views/login.html',
      controller: 'LoginCtrl'
    })
    .state('default', {
      url: '/',
      templateUrl: 'views/home.html',
      controller: 'HomeCtrl'
    })
    .state('forum-category', {
      url: '/forum/category/:category',
      templateUrl: 'views/forumCategory.html',
      controller: 'ForumCategoryCtrl'
    });
}]);