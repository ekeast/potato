(function() {
    function MyController($scope, $http, $sce) {
        
        var url = "https://api.flickr.com/services/feeds/photos_public.gne?tags=potato&tagmode=all&format=json";
        $http.jsonp(url).success(function (data) {
      
        });
	
        jsonFlickrFeed = function(data){
           $scope.data = data;
        }
        
        $scope.toTrustedHTML = function( html ){
            return $sce.trustAsHtml( html );
        }
        
        $scope.setCurrent = function( item ) {
            $scope.currentItem = item;
        }
        
        $scope.cancel = function() {
            $scope.currentItem = null;
        }
        
    }
    

    
    angular
        .module('potato')
        .controller('MyController', MyController);
})();