(function() {
  /**
    * A convenient list of some commonly used
    * base configurations for different customers
    */
  var baseConfig = module.exports = {
    actic: {
      sweden: {
        url: 'https://actic.exerp.com/actic/',
        centerId: '100'
      },
      norway: {
        url: 'https://actic.exerp.com/actic/',
        centerId: '500'
      }
    },
    fresh: {
      url: 'https://fresh.exerp.com/fresh/',
      centerId: '300'
    },
    virginActive: {
      bolognaCitta: {
        url: 'https://virginactive.exerp.com/www/',
        centerId: '100'
      }
    },
    satsElixia: {
      norway: {
        url: 'https://sats.exerp.com/www/',
        centerId: '100'
      },
      denmark: {
        url: 'https://sats.exerp.com/www/',
        centerId: '300'
      },
      sweden: {
        url: 'https://sats.exerp.com/www/',
        centerId: '500'
      },
      finland: {
        url: 'https://sats.exerp.com/www/',
        centerId: '700'
      }
    }
  };
})();
