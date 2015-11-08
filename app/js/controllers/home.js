angular.module('naijamaterial.controllers')
  .controller('HomeCtrl', ['$scope',
    function($scope) {

      $scope.categories = [
        {id: 1,
          name: 'Entertainment',
          icon: 'boombox.png',
          updated: moment().valueOf(),
          subCategories: [
            {name: 'Music', description: 'Discuss about all things music'},
            {name: 'Celebrities', description: 'Get the 411 on your favorite celebrities'},
            {name: 'Movies', description: 'Discuss classic and latest movies'}
          ]
        },
        {
          id: 2,
          name: 'Science & Technology',
          icon: 'science.png',
          updated: moment().valueOf(),
          subCategories: [
            {name: 'Phones', description: 'Find out about latest phones'},
            {name: 'Computers', description: 'Get information on Mac & Windows laptops'},
            {name: 'Programming', description: 'Discuss about programming languages and frameworks such as python, ruby, javascript etc'}
          ]
        },
        {
          id: 3,
          name: 'Arts',
          icon: 'arts.png',
          updated: moment().valueOf(),
          subCategories: [
            {name: 'Politics', description: 'Discuss about current events in Nigerian politics'},
            {name: 'Religion', description: 'Discuss about all things religion from the good to the bad'}
          ]
        },
        {
          id: 4,
          name: 'General',
          icon: 'chat.png',
          updated: moment().valueOf(),
          subCategories: [
            {name: 'Travel', description: 'Share stories about your travels locally and abroad'},
            {name: 'JAMB', description: 'No explanation. JAMB 101'},
            {name: 'NYSC', description: 'Discuss about things like camp, call-up letters, CDS etc'},
            {name: 'Education', description: 'Discuss about universities both home and abroad'}
          ]
        }
      ];

      $scope.selectCategory =  function(index) {
        $scope.selectedCategory = $scope.categories[index];
        switch(index) {
          case 0:
            $scope.toolTipClass = 'first-position';
            break;

          case 1:
            $scope.toolTipClass = 'second-position';
            break;

          case 2:
            $scope.toolTipClass = 'third-position';
            break;

          case 3:
            $scope.toolTipClass = 'fourth-position';
            break;
        }
      };

      $scope.selectCategory(0);

      $scope.logout = function() {
        // Authentication.logout();
        // $state.go('login');
      };
    }
]);
