'use strict';

(function () {
  angular.module('newApp').config(appConfig);
  appConfig.$inject = ['$stateProvider', '$locationProvider'];

  function appConfig($stateProvider, $locationProvider) {
    $stateProvider.state('master', {
      abstract: true
    }).state('homepage', {
      parent: "master",
      data: {
        navIndex: 0,
        title: "Homepage"
      },
      url: "/",
      controller: function controller($scope) {
        $scope.$on('$viewContentLoaded', function (e) {
          if (typeof window.callPhantom != "undefined") {
            window.callPhantom();
          }
        });
      }
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
  }
})();