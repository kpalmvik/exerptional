(function() {
  /*
    Module dependencies
  */

  var cheerio = require('cheerio');

  /* Private  */
  var baseUrl = null;

  /* Functions */

  var Client = exports.Client = function(baseUrl) {
    if(baseUrl) {
      this.baseUrl = baseUrl;
    } else {
      throw new Error('A base URL must be defined!');
    }
  };
})();
