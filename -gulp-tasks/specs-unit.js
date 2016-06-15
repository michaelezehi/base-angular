/*global require*/
(function buildTask(require) {
  'use strict';
  var gulp = require('gulp')
    , Server = require('karma').Server
    , config = require('../gulp.config')();

  gulp.task('specs-unit', ['inject'], function (done) {
    return new Server({
      configFile: config.karmaConfig,
      singleRun: true
    }, function () {
      done
    }).start();
  });

})(require);
