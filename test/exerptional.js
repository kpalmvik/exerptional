define([
    'intern!bdd',
    'intern/chai!expect',
    'intern/chai!',
    'intern/dojo/node!chai-as-promised',
    'intern/dojo/node!../exerptional' // Load as a NPM CommonJS module
], function (bdd, expect, chai, chaiAsPromised, exerptional) {
      var describe = bdd.describe,
          it = bdd.it,
          beforeEach = bdd.beforeEach,
          that = bdd.that;

      var testBaseConfig = {
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

      // Helper to console log in a Promise.then
      var testLog = function(res) { console.log(res); };

      chai.use(chaiAsPromised);
      chai.should();
      chai.expect();

      describe('Sanity check', function() {
        var createClient = exerptional.createClient;

        it('should successfully create a client with a base configuration', function () {
          var dummyBase = {
              url: 'http://my.dummy.url/',
              centerId: '1'
          };

          var clientWithDummyBase = createClient.bind(null, dummyBase);

          expect(clientWithDummyBase).to.be.OK;
          }
        );

        it('should thrown an error for a client without a specified base configuration', function () {
          var clientWithoutBase = createClient.bind(null, null);

          expect(clientWithoutBase).to.throw(TypeError);
        });

        it('should thrown an error for a client without a specified base URL', function () {
          var dummyBase = {
              centerId: '1'
          };

          var clientWithNoBaseUrl = createClient.bind(null, dummyBase);

          expect(clientWithNoBaseUrl).to.throw(TypeError);
        });

        it('should thrown an error for a client without a specified base Center Id', function () {
          var dummyBase = {
            url: 'http://my.dummy.url/'
          };

          var clientWithNoBaseCenterId = createClient.bind(null, dummyBase);

          expect(clientWithNoBaseCenterId).to.throw(TypeError);
        });

    });

    describe('List centers', function() {
      var createClient = exerptional.createClient;

          // client = createClient(testBaseConfig.actic.sweden);
          client = createClient(testBaseConfig.actic.sweden);

      it('should resolve eventually', function() {
        var allCenters = client.centers.all();

        return allCenters.should.eventually.resolve;
      });

      it('should have at least one center with id and name in the array', function() {
        var centerArray = client.centers.all();

        centerArray.should.eventually.not.be.empty;

        var firstArrayItem = centerArray.then(function(res) {
          return res.pop();
        });

        firstArrayItem.should.eventually.not.be.empty;

        firstArrayItem.should.eventually.have.property('id');
        firstArrayItem.should.eventually.have.property('name');

        return firstArrayItem;
      });

    });
});
