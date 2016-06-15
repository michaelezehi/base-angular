exports.config = {
  capabilities: {
    // You can use other browsers
    // Options chrome, firefox, phantomjs, safari, IE (-_-)
    'browserName': 'phantomjs',
    /*
     * Can be used to specify the phantomjs binary path.
     * This can generally be ommitted if you installed phantomjs globally.
     */
    'phantomjs.binary.path': require('phantomjs').path,

    /*
     * Command line args to pass to ghostdriver, phantomjs's browser driver.
     * See https://github.com/detro/ghostdriver#faq
     */
    'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']

  },
  specs: [
    'test/e2e/**.spec.js'
  ],
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    isVerbose: true,
  },
  allScriptsTimeout: 20000,
  onPrepare: function () {
    browser.driver.get('http://localhost:8100/');
  }
};
