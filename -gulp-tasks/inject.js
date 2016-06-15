/*global require*/
(function buildTask(require) {
  'use strict';
  var gulp = require('gulp')
    , plugins = require('gulp-load-plugins')()
    , babel = require('gulp-babel')
    , connect = require('gulp-connect')
    , wiredep = require('wiredep').stream
    , replace = require('gulp-replace-path')
    , config = require('../gulp.config')();

  gulp.task('inject', ['copy', 'wiredep'], function () {
    var options = config.getWiredepDefaultOptions();
    gulp
      .src(config.index)
      .pipe(wiredep(options))
      .pipe(plugins.inject(gulp.src(config.js)
        .pipe(plugins.angularFilesort())))
      .pipe(replace('/www/', ''))
      .pipe(gulp.dest(config.appRoot))
      .pipe(connect.reload());
  });

})(require);
