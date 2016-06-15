'use strict';

(function () {
  angular.module('newApp.cache', []).factory('cacheStorage', cacheStorage);

  function cacheStorage() {
    return {
      add: add,
      get: get,
      remove: remove,
      removeAll: removeAll
    };

    function add(cacheName, data, cacheTimeInMinutes) {
      var date = new Date();
      if (cacheTimeInMinutes != null) {
        date.setHours(date.getMinutes() + cacheTimeInMinutes);
      } else {
        date = null;
      }
      var dataToCache = { data: data, expiryTime: date };

      var objectToSaveToJason = JSON.stringify(dataToCache);
      localStorage.setItem(cacheName, objectToSaveToJason);
    }

    function get(cacheName) {
      var cached = JSON.parse(localStorage.getItem(cacheName));
      if (cached === null || cached === undefined) {
        return null;
      }
      var currentDate = new Date();

      if (cached.expiryTime != null && cached.expiryTime < currentDate) {
        return null;
      }
      return cached.data;
    }

    function remove(cacheName) {
      localStorage.removeItem(cacheName);
    }

    function removeAll() {
      localStorage.clear();
    }
  }
})();