'use strict';
(function () {
  angular.module('newApp.cache', [])
    .factory('cacheStorage', cacheStorage);

  function cacheStorage() {
    return {
      add: add,
      get: get,
      remove: remove,
      removeAll: removeAll
    };

    function add(cacheName, data, cacheTimeInMinutes) {
      let date = new Date();
      if (cacheTimeInMinutes != null) {
        date.setHours(date.getMinutes() + cacheTimeInMinutes);
      } else {
        date = null;
      }
      let dataToCache = {data: data, expiryTime: date};

      var objectToSaveToJason = JSON.stringify(dataToCache);
      localStorage.setItem(cacheName, objectToSaveToJason);
    }

    function get(cacheName) {
      let cached = JSON.parse(localStorage.getItem(cacheName));
      if (cached === null || cached === undefined) {
        return null;
      }
      let currentDate = new Date();

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
