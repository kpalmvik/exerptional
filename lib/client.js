(function() {
  /*
    Module dependencies
  */

  /* Private  */
  var baseUrl = null;

  /* Functions */

  var centers = require('./centers');

  /* Export */

  var Client = exports.Client = function(baseUrl) {
    if(baseUrl) {
      this.baseUrl = baseUrl;

      return {
        centers: centers
      };
    } else {
      throw new Error('A base URL must be defined!');
    }
  };
})();
