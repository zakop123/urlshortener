/**
* Main application controller
**/
angular.module('urlshortener')
.controller('MainController', MainController);

MainController.$inject = ['$scope','UrlShortenerService', '$interval'];

function MainController($scope,UrlShortenerService,$interval) {

  $scope.inputUrl = '';
  $scope.outputUrl;
  $scope.analyticsView = false;
  $scope.userHistory = JSON.parse(localStorage.getItem("urlHistory")) || [];

  $scope.getShortUrl = function () {
    UrlShortenerService.shortenUrl($scope.inputUrl).then(function(outputUrl){
      $scope.outputUrl = outputUrl.data;
      var entry = {long_url: $scope.inputUrl, short_url: $scope.outputUrl, clicks:0};
      $scope.userHistory.push(entry);
      localStorage.setItem('urlHistory',JSON.stringify($scope.userHistory));
    },
    function(error){
      console.log(error)
    });
  }


  $scope.getClicksforUrl = function () {
    $scope.inputUrl= '';
    $scope.outputUrl='';
    $scope.analyticsView = true;
    angular.forEach($scope.userHistory, function(value, key) {
      UrlShortenerService.urlClicks(value.short_url).then(function(clicks){
        value.clicks = clicks.data.month.shortUrlClicks;
      },
      function(error){
        console.log(error)
      });
    });
    localStorage.setItem('urlHistory',JSON.stringify($scope.userHistory));
  }
  setInterval(function(){
    if($scope.analyticsView) {
      $scope.getClicksforUrl()
    }
  },10000);
}
