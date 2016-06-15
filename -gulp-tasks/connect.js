/*global require*/
(function buildTask(require) {
  'use strict';
  var gulp = require('gulp')
    , connect = require('gulp-connect')
    , config = require('../gulp.config')();

  gulp.task('connect', function () {
    return connect.server({
      root: [config.appRoot],
      port: config.defaultPort,
      livereload: true
    });
  });

})(require);
