'use strict';

angular.module('openWeatherApp', [
  'ngRoute',
  'openWeatherApp.filters',
  'openWeatherApp.services',
  'openWeatherApp.directives',
  'openWeatherApp.controllers',
  "iso-3166-country-codes"
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/forecast', {templateUrl: 'partials/forecast.html', controller: 'OpenWeatherCtrl'});
  $routeProvider.otherwise({redirectTo: '/forecast'});
}]);
