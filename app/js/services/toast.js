angular.module('naijamaterial.services')
  .factory('Toast', ['$mdToast', function($mdToast){
    return {
      show: function(text, hideDelay, position, cb) {
        text = text;
        hideDelay = hideDelay || 2000;
        position = position || 'bottom left';

        $mdToast.show({
          template: '<md-toast>'+text+'</md-toast>',
          hideDelay: hideDelay,
          position: position
        });

        if(cb) {
          setTimeout(function() { cb(); }, hideDelay);
        }
      },

      loading: function(hideDelay, position, cb) {
        tmpl = '<md-toast><span><i class="fa fa-spinner fa-spin"></i> Loading...</span></md-toast>';
        hideDelay = hideDelay || 2000;
        position = position || 'bottom left';

        $mdToast.show({
          template: tmpl,
          hideDelay: hideDelay,
          position: position
        });

        if(cb) {
          setTimeout(function() { cb(); }, hideDelay);
        }
      },

      hide: function() {
        $mdToast.hide();
      }
    }
  }]);
