/*global require*/
(function buildTask(require) {
  'use strict';
  var gulp = require('gulp')
    , errorHandler = require('../-modules/error-handler')
    , config = require('../gulp.config')();

  gulp.task('watch', function () {
    gulp.watch(config.sass, ['sass']);
    gulp.watch(config.appRoot, ['specs-unit'])
      .on('error', errorHandler);
  });

})(require);
