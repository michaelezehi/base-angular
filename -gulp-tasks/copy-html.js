/*global require*/
(function buildTask(require) {
  'use strict';
  var gulp = require('gulp')
    , del = require('del')
    , connect = require('gulp-connect')
    , config = require('../gulp.config')();

  gulp.task('copy-html', function () {
    gulp.src(config.devApp + '/**/*.{html,ttf,woff,eof,svg}')
      .pipe(gulp.dest(config.clientAppJs))
      .pipe(connect.reload());
  });

})(require);
