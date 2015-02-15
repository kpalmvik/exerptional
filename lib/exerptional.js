(function() {
  /*
    Module dependencies
  */

  var cheerio = require('cheerio');
  var http = require('http');

  /* Private  */
  var baseUrl = null;

  /* Functions */
  var setup = function(baseUrl) {
    this.baseUrl = baseUrl;
  };

  var listClubs = function() {
    return {
      clubs: [
        {
          id: 1,
          name: 'Club name'
        }
      ]
    }
  }

  /* Exports Exerptional */

  var Exerptional = module.exports = {
    setup: setup,
    listClubs: listClubs
  };
})();
