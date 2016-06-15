module.exports = function (config) {
  config.set({

    // base path used to resolve all patterns (e.g. files, exclude)
    basePath: '',

    // frameworks to use
    frameworks: ['jasmine', 'mocha'],

    // list of files / patterns to load in the browser
    files: [
      'www/bower_components/jquery/dist/jquery.js',
      'www/bower_components/angular/angular.js',
      'www/bower_components/angular-mocks/angular-mocks.js',
      'www/bower_components/angular-animate/angular-animate.js',
      'www/bower_components/angular-sanitize/angular-sanitize.js',
      'www/bower_components/angular-ui-router/release/angular-ui-router.js',
      'www/js/app.js',
      'www/js/-config/*.js',
      'www/js/-common/*.js',
      'www/js/-startup/*.js',
      'www/js/-constant/*.js',
      'www/js/modules/**/*.module.js',
      'www/js/modules/**/*.js',
      'test/spec/**/*.js'
    ],

    // list of files to exclude
    exclude: [],

    // preprocess matching files before serving them to the browser
    preprocessors: {
      'www/*.js': ['coverage']
    },
    plugins: ['karma-jasmine',
      'karma-coverage',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-mocha',
      'karma-phantomjs-launcher'
    ],

    coverageReporter: {
      reporters: [
        {type: 'html', dir: 'coverage/'},
        {type: 'text-summary'}
      ]
    },

    // test results reporter to use
    reporters: ['progress', 'coverage', 'mochawesome'],

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests on file changes
    autoWatch: true,

    // start these browsers
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};




