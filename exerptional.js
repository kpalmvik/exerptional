/**
 * Export
 */

var ExerptionalClient = require('./lib/client').Client;

exports.createClient = function (baseUrl) {
  return new ExerptionalClient(baseUrl);
};

/*
  Export the version
*/

exports.version = require('./package').version;
