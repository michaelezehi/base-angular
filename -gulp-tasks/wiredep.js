/*global require*/
(function buildTask(require) {
  'use strict';
  var gulp = require('gulp')
    , wiredep = require('wiredep').stream
    , connect = require('gulp-connect')
    , config = require('../gulp.config')();

  gulp.task('wiredep', function () {
    return gulp.src(config.index)
      .pipe(wiredep({
        optional: 'configuration',
        goes: 'here'
      }))
      .pipe(gulp.dest(config.appRoot))
      .pipe(connect.reload());
  });
})(require);
