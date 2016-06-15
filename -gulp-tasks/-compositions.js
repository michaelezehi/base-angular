/*global require*/
(function buildTask(require) {
  'use strict';
  var gulp = require('gulp');

  gulp.task('default', ['build', 'watch', 'connect']);
  gulp.task('build', ['specs']);
  gulp.task('specs', ['specs-unit']);

})(require);
