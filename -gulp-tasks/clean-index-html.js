/*global require*/
(function buildTask(require) {
  'use strict';
  var gulp = require('gulp')
    , del = require('del')
    , config = require('../gulp.config')();

  gulp.task('clean-index-html', function (cb) {
    return del([config.index], cb);
  });

})(require);
