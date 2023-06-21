var defaults = require("./wdio.conf.js");
var _ = require("lodash");

var overrides = {
  testData: [],
  specs: [
    '../../src/test/login.spec.js'
  ]
};

exports.config = _.defaultsDeep(overrides, defaults.config);
