/**
 * Export
 */

var ExerptionalClient = require('./lib/client').Client;
var commonBaseConfig = require('./lib/baseconfig');

exports.createClient = function (baseUrl) {
  return new ExerptionalClient(baseUrl);
};

exports.commonBaseConfig = commonBaseConfig;

/*
  Export the version
*/

exports.version = require('./package').version;
