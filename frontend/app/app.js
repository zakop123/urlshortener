angular.module('urlshortener', ['ngRoute', 'tableSort'])
.config(config);

config.$inject = ['$routeProvider', '$locationProvider'];

function config($routeProvider, $locationProvider) {

  $locationProvider.html5Mode(true);

  // routes
  $routeProvider
  .when('/', {
    templateUrl: 'views/home.html',
    controller: 'MainController',
    controllerAs: 'main'
  })
  .otherwise({
    redirectTo: '/'
  });
}
