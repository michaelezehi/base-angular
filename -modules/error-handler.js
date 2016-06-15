module.exports = function () {
  var plugins = require('gulp-load-plugins')()
    , beep = require('beepbeep');

  var errorHandler = function (error) {
    beep(2, 170);
    plugins.util.log(error);
  };
  
  return errorHandler;
};
