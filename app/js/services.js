'use strict';

/* Services */

angular.module('openWeatherApp.services', ['ngResource'])

 .factory('openWeatherMap', function($resource) {

    var apiKey = '279b4be6d54c8bf6ea9b12275a567156';
    var apiBaseUrl = 'https://www.metaweather.com/api/';

    return $resource(apiBaseUrl + ':path/:subPath?query=:location',
      {
        mode: 'json',
        callback: 'JSON_CALLBACK',
        units: 'metric',
        lang: 'en'
      },
      {
        queryWeather: {
          method: 'JSONP',
          params: {
            path: 'location',
            subPath: 'search'
          },
          isArray: false,
          headers: {
            'x-api-key': apiKey
          }
        },
        queryForecast: {
          method: 'JSONP',
          params: {
            path: 'forecast'
          },
          isArray: false,
          headers: {
            'x-api-key': apiKey
          }
        }/*,
        queryForecastDaily: {
          method: 'JSONP',
          params: {
            path: 'forecast',
            subPath: 'daily',
            cnt: 7
          },
          isArray: false,
          headers: {
            'x-api-key': apiKey
          }
        }*/
      }
    )
  });
