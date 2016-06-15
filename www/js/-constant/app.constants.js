'use strict';

(function () {

  angular.module('config', []).constant('ENV', {
    name: 'development',
    server: 'https://apps.newApp.org.uk:8042/',
    isDevelopment: true

  }).constant('ENV', {
    name: 'production',
    server: 'https://apps.newApp.org.uk:8041/',
    isDevelopment: false
  });
}).call(undefined);