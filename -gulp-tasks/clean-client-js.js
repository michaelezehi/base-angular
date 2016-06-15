/*global require*/
(function buildTask(require) {
  'use strict';
  var gulp = require('gulp')
    , del = require('del')
    , config = require('../gulp.config')();

  gulp.task('clean-client-js', function (cb) {
    console.log('Deleting www/js file...');
    return del([config.clientAppJs], cb);
  });

})(require);
