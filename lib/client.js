(function() {
  /*
    Module dependencies
  */

  /* Functions */

  var Centers = require('./centers');

  /* Export */

  var Client = exports.Client = function(base) {
    if(base) {
      if(!base.url) {
        throw new TypeError('options.url must be defined');
      }

      if(!base.centerId) {
        throw new TypeError('base.centerId must be defined');
      }

      return {
        centers: new Centers(base.url, base.centerId)
      };
    } else {
      throw new TypeError('The base object must be defined');
    }
  };
})();
