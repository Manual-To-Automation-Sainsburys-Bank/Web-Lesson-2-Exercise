var defaults = require("./wdio.conf.js");
var _ = require("lodash");

var overrides = {
  user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',
  specs: [
    '../../src/test/*.js',
  ],
  services: [['browserstack']],
  commonCapabilities: {
    'browserstack.debug': true,
    'browserstack.video': true,
    'browserstack.networkLogs': true,
    acceptInsecureCerts: true,
    'browserstack.maskCommands':'setValues, getValues, setCookies, getCookies'
  },
  capabilities: [{
    maxInstances: 5,
    os: "OS X",
    os_version: "Catalina",
    browserName: 'Chrome',
    browser_version: "latest",
    // name: (require('minimist')(process.argv.slice(2)))['bstack-session-name'] || 'default_name', //To set a custom test name
    build: process.env.BROWSERSTACK_BUILD_NAME || 'browserstack-examples-webdriverio' + " - " + new Date().getTime()
  }],
};

exports.config = _.defaultsDeep(overrides, defaults.config);

exports.config.capabilities.forEach(function(caps){
  for(var i in exports.config.commonCapabilities) caps[i] = caps[i] || exports.config.commonCapabilities[i];
});
