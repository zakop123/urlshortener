/**
* Factory that talks to the backend
*/
angular.module('urlshortener')
.factory('UrlShortenerService', UrlShortenerService);

UrlShortenerService.$inject = ['$http'];

function UrlShortenerService($http) {

  var shortenUrl = function (url) {
    var req = {
      long_url: url.toString()
    }
    return $http.post('http://localhost:3000/api/shorten',req);
  }

  var urlClicks = function (url) {
    var req = {
      url: url.toString()
    }
    return $http.post('http://localhost:3000/api/clicks',req);
  }

  return {
    shortenUrl: shortenUrl,
    urlClicks: urlClicks
  }
}
