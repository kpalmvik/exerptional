(function() {
  /*
    Module dependencies
  */

  /* Functions */

  var Centers = require('./centers');

  /* Export */

  var Client = exports.Client = function(bu) {
    var baseUrl = null;
    if(bu) {
      this.baseUrl = bu;

      return {
        centers: new Centers(this.baseUrl)
      };
    } else {
      throw new Error('A base URL must be defined!');
    }
  };
})();
