(function() {
  /*
    Module dependencies
  */

  var cheerio = require('cheerio');
  var Promise = require('promise');

  /* Functions */

  var allCenters = exports.module = function(client) {
    return new Promise(function (resolve, reject) {
      resolve([
        {
          id: '1',
          name: 'Name 1'
        },
        {
          id: '2',
          name: 'Name 2'
        },
        {
          id: '3',
          name: 'Name 3'
        }
      ]);
    });
  };
})();
