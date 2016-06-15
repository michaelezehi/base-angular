module.exports = function () {
  var clientApp = __dirname + '/www/'
    , devApp = __dirname + '/app/'
    , clientAppJs = clientApp + 'js/'
    , root = __dirname
    , temp = __dirname + '/.tmp/'
    , wiredep = require('wiredep')
    , bower = {
    json: require('./bower.json'),
    directory: __dirname + '/www/bower_components/',
    ignorePath: '../..'
  };

  var config = {
    alljs: [
      clientApp + '/**/*.js',
      './*.js'
    ],
    allDevAppJs: devApp + '**/*.js',
    appRoot: clientApp,
    browserReloadDelay: 1000,
    bower: bower,
    devApp: devApp,
    defaultPort: 3000,
    clientAppJs: clientAppJs,
    css: temp + 'styles.css',
    fonts: bower.directory + 'font-awesome/fonts/**/*.*',
    html: clientApp + '**/*.html',
    htmltemplates: clientApp + '**/*.html',
    images: clientApp + 'images/**/*.*',
    index: clientApp + 'index.html',
    js: [
      clientAppJs + 'app.js',
      clientAppJs + '-config/**/*.js',
      clientAppJs + '-common/**/*.js',
      clientAppJs + '-constant/**/*.js',
      clientAppJs + '-startup/**/*.js',
      clientAppJs + 'modules/**/module.js',
      clientAppJs + 'modules/**/*.js'
    ],
    jsOrder: [
      '-lib/**/*.js',
      '**/app.module.js',
      '**/*.module.js',
      '**/*.js'
    ],
    karmaConfig: __dirname + '/karma.config.js',
    less: clientApp + 'styles/styles.less',
    optimized: {
      app: 'app.js',
      lib: 'lib.js'
    },
    plato: {js: clientApp + '**/*.js'},
    packages: [
      './package.json',
      './bower.json'
    ],
    root: root,
    sass: root + '/scss/**/*.scss',
    stubsjs: [
      bower.directory + 'angular-mocks/angular-mocks.js',
      clientApp + 'stubs/**/*.js'
    ],
    temp: temp,
    templateCache: {
      file: 'templates.js',
      options: {
        module: 'app.core',
        root: 'www/',
        standAlone: false
      }
    }
  };
  config.getWiredepDefaultOptions = function () {
    return {
      bowerJson: config.bower.json,
      directory: config.bower.directory,
      ignorePath: config.bower.ignorePath
    };
  };
  return config;
};
