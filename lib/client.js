(function() {
  /*
    Module dependencies
  */

  var Centers = require('./centers');

  /* Export */

  var Client = exports.Client = function(baseConfig) {
    if(baseConfig) {
      if(!baseConfig.url) {
        throw new TypeError('baseConfig.url must be defined');
      }

      if(!baseConfig.centerId) {
        throw new TypeError('baseConfig.centerId must be defined');
      }

      //
      return {
        centers: new Centers(baseConfig.url, baseConfig.centerId),
      };
    } else {
      throw new TypeError('The baseConfig object must be defined');
    }
  };
})();
