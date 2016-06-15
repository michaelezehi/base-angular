/*global require*/
(function buildTask(require) {
  'use strict';
  var gulp = require('gulp')
    , connect = require('gulp-connect')
    , sass = require('gulp-sass')
    , minifyCss = require('gulp-minify-css')
    , rename = require('gulp-rename')
    , config = require('../gulp.config')();

  gulp.task('sass', function (done) {
    gulp.src(config.sass)
      .pipe(sass())
      .on('error', sass.logError)
      .pipe(gulp.dest(config.sassCompile))
      .pipe(minifyCss({
        keepSpecialComments: 0
      }))
      .pipe(rename({extname: '.min.css'}))
      .pipe(gulp.dest(config.sassCompile))
      .pipe(connect.reload())
      .on('end', done);
  });

})(require);
