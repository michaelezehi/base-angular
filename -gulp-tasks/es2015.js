/*global require*/
(function buildTask(require) {
  'use strict';
  var gulp = require('gulp')
    , babel = require('gulp-babel')
    , connect = require('gulp-connect')
    , config = require('../gulp.config')();

  gulp.task('es2015', function () {
    return gulp.src(config.allDevAppJs)
      .pipe(babel({presets: ['es2015']}))
      .pipe(gulp.dest(config.clientAppJs))
      .pipe(connect.reload());
  });

})(require);
