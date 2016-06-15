'use strict'
describe('newApp Caching', function () {
    var cacheStorage;

    beforeEach(function () {
        angular.module('newApp.cache');
    });

    beforeEach(inject(function () {
        var $injector = angular.injector(['newApp.cache']);
        cacheStorage = $injector.get('cacheStorage');
    }));

    afterEach(inject(function () {
        cacheStorage.removeAll();
    }));

    it('should not be undefined', function () {
        expect(cacheStorage).not.toBeUndefined();
    });

    it('should be able to remove all cached items', function () {
        var cache = cacheStorage.removeAll();
        expect(cache).toBeUndefined();
    });

    it('should be able to remove cached item by name', function () {
        var cacheName = 'test-obj';
        saveCacheItemTest();
        cacheStorage.remove(cacheName);
        var cached = cacheStorage.get(cacheName);
        expect(cached).toBeNull();
    });

    it('should return NULL when cache name does NOT exist', function () {
        var cacheName = 'test-obj2';
        saveCacheItemTest();
        var cached = cacheStorage.get(cacheName);
        expect(cached).toBeNull();
    });

    it('should be able to save any object', function () {
        saveCacheItemTest();
    });

    function saveCacheItemTest() {
        var obj = { name: 'cachedItem' };
        var cacheName = 'test-obj';
        cacheStorage.add(cacheName, obj);
        var cached = cacheStorage.get(cacheName);
        expect(cached).not.toBeNull();
        expect(cached.name).toBe('cachedItem');
    };

});
