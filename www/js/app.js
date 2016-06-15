'use strict';

(function () {
  angular.module('newApp', ['angular.common', 'newApp.common']);

  angular.element(document.body).ready(function () {
    angular.bootstrap(document.body, ['newApp']);
  });
})();