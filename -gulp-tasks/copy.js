/*global require*/
(function buildTask(require) {
  'use strict';
  var gulp = require('gulp')
    , runSequence = require('run-sequence');

  gulp.task('copy', ['clean-client-js'], function (done) {
    return runSequence('es2015', 'copy-html', function () {
      console.log('running es2015 then copying the html....');
      done();
    })
  });

})(require);
