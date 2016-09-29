(function() {
    function config($stateProvider, $locationProvider) {
        $locationProvider
            .html5Mode({
                enabled: true,
                requireBase: false
            });
        
        $stateProvider
         .state('index', {
             url: '/',
             controller: 'MyController as index',
             templateUrl: '/pages/index.html'
         });
    }
    
    angular 
        .module('potato', ['ui.router'])
        .config(config);
})();