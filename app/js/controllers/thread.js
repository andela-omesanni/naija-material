angular.module('naijamaterial.controllers')
  .controller('ThreadCtrl', ['$scope', '$q', '$timeout', '$state', '$stateParams', '$mdDialog',
    function($scope, $q, $timeout, $state, $stateParams, $mdDialog) {

      $scope.title = $stateParams.subCategory;

      $scope.query = {
        topic: 'topic',
        limit: 15,
        page: 1
      };

      $scope.newTopic = function(evt) {
        $mdDialog.show({
          controller:'TopicDialogCtrl',
          templateUrl: 'views/dialog/new-topic.html',
          parent: angular.element(document.body),
          targetEvent: evt,
          clickOutsideToClose: true
        }).then(function(res) {
          $state.reload();
        });
      }

      $scope.onPaginationChange = function (page, limit) {
        var deferred = $q.defer();
        $timeout(function () {
          deferred.resolve();
        }, 1000);
        return deferred.promise;
      };

      $scope.thread = [
        {
          topic: 'How many browsers do you have installed?',
          time: new Date(),
          posted_by: 'Soulman',
          latest_reply: 'Omesanni',
          comment: 80
        },
        {
          topic: 'How many browsers do you have installed?',
          time: new Date(),
          posted_by: 'Soulman',
          latest_reply: 'Omesanni',
          comment: 80
        },
        {
          topic: 'How many browsers do you have installed?',
          time: new Date(),
          posted_by: 'Soulman',
          latest_reply: 'Omesanni',
          comment: 80
        },
        {
          topic: 'How many browsers do you have installed?',
          time: new Date(),
          posted_by: 'Soulman',
          latest_reply: 'Omesanni',
          comment: 80
        },
        {
          topic: 'How many browsers do you have installed?',
          time: new Date(),
          posted_by: 'Soulman',
          latest_reply: 'Omesanni',
          comment: 80
        },
        {
          topic: 'How many browsers do you have installed?',
          time: new Date(),
          posted_by: 'Soulman',
          latest_reply: 'Omesanni',
          comment: 80
        },
        {
          topic: 'How many browsers do you have installed?',
          time: new Date(),
          posted_by: 'Soulman',
          latest_reply: 'Omesanni',
          comment: 80
        },
        {
          topic: 'How many browsers do you have installed?',
          time: new Date(),
          posted_by: 'Soulman',
          latest_reply: 'Omesanni',
          comment: 80
        },
        {
          topic: 'How many browsers do you have installed?',
          time: new Date(),
          posted_by: 'Soulman',
          latest_reply: 'Omesanni',
          comment: 80
        },
        {
          topic: 'How many browsers do you have installed?',
          time: new Date(),
          posted_by: 'Soulman',
          latest_reply: 'Omesanni',
          comment: 80
        },
        {
          topic: 'How many browsers do you have installed?',
          time: new Date(),
          posted_by: 'Soulman',
          latest_reply: 'Omesanni',
          comment: 80
        },
        {
          topic: 'How many browsers do you have installed?',
          time: new Date(),
          posted_by: 'Soulman',
          latest_reply: 'Omesanni',
          comment: 80
        },
        {
          topic: 'How many browsers do you have installed?',
          time: new Date(),
          posted_by: 'Soulman',
          latest_reply: 'Omesanni',
          comment: 80
        },
        {
          topic: 'How many browsers do you have installed?',
          time: new Date(),
          posted_by: 'Soulman',
          latest_reply: 'Omesanni',
          comment: 80
        },
        {
          topic: 'How many browsers do you have installed?',
          time: new Date(),
          posted_by: 'Soulman',
          latest_reply: 'Omesanni',
          comment: 80
        },
        {
          topic: 'How many browsers do you have installed?',
          time: new Date(),
          posted_by: 'Soulman',
          latest_reply: 'Omesanni',
          comment: 80
        },
        {
          topic: 'How many browsers do you have installed?',
          time: new Date(),
          posted_by: 'Soulman',
          latest_reply: 'Omesanni',
          comment: 80
        },
        {
          topic: 'How many browsers do you have installed?',
          time: new Date(),
          posted_by: 'Soulman',
          latest_reply: 'Omesanni',
          comment: 80
        },
        {
          topic: 'How many browsers do you have installed?',
          time: new Date(),
          posted_by: 'Soulman',
          latest_reply: 'Omesanni',
          comment: 80
        },
        {
          topic: 'How many browsers do you have installed?',
          time: new Date(),
          posted_by: 'Soulman',
          latest_reply: 'Omesanni',
          comment: 80
        },
        {
          topic: 'How many browsers do you have installed?',
          time: new Date(),
          posted_by: 'Soulman',
          latest_reply: 'Omesanni',
          comment: 80
        },
        {
          topic: 'How many browsers do you have installed?',
          time: new Date(),
          posted_by: 'Soulman',
          latest_reply: 'Omesanni',
          comment: 80
        },
        {
          topic: 'How many browsers do you have installed?',
          time: new Date(),
          posted_by: 'Soulman',
          latest_reply: 'Omesanni',
          comment: 80
        },
        {
          topic: 'How many browsers do you have installed?',
          time: new Date(),
          posted_by: 'Soulman',
          latest_reply: 'Omesanni',
          comment: 80
        },
        {
          topic: 'How many browsers do you have installed?',
          time: new Date(),
          posted_by: 'Soulman',
          latest_reply: 'Omesanni',
          comment: 80
        },
        {
          topic: 'How many browsers do you have installed?',
          time: new Date(),
          posted_by: 'Soulman',
          latest_reply: 'Omesanni',
          comment: 80
        },
        {
          topic: 'How many browsers do you have installed?',
          time: new Date(),
          posted_by: 'Soulman',
          latest_reply: 'Omesanni',
          comment: 80
        },
        {
          topic: 'How many browsers do you have installed?',
          time: new Date(),
          posted_by: 'Soulman',
          latest_reply: 'Omesanni',
          comment: 80
        },
        {
          topic: 'How many browsers do you have installed?',
          time: new Date(),
          posted_by: 'Soulman',
          latest_reply: 'Omesanni',
          comment: 80
        },
        {
          topic: 'How many browsers do you have installed?',
          time: new Date(),
          posted_by: 'Soulman',
          latest_reply: 'Omesanni',
          comment: 80
        },
        {
          topic: 'How many browsers do you have installed?',
          time: new Date(),
          posted_by: 'Soulman',
          latest_reply: 'Omesanni',
          comment: 80
        },
        {
          topic: 'How many browsers do you have installed?',
          time: new Date(),
          posted_by: 'Soulman',
          latest_reply: 'Omesanni',
          comment: 80
        },
        {
          topic: 'How many browsers do you have installed?',
          time: new Date(),
          posted_by: 'Soulman',
          latest_reply: 'Omesanni',
          comment: 80
        },
        {
          topic: 'How many browsers do you have installed?',
          time: new Date(),
          posted_by: 'Soulman',
          latest_reply: 'Omesanni',
          comment: 80
        },
        {
          topic: 'How many browsers do you have installed?',
          time: new Date(),
          posted_by: 'Soulman',
          latest_reply: 'Omesanni',
          comment: 80
        }
      ]
    }
])
.controller('TopicDialogCtrl', ['$scope', '$mdDialog', 'Toast',
  function($scope, $mdDialog, Toast){

    $scope.create = function() {
      console.log("topic: ", $scope.topic);
      Toast.show('Topic has been created');
      $mdDialog.hide();
    }

    $scope.cancel = function() {
      $mdDialog.hide();
    }
}]);
