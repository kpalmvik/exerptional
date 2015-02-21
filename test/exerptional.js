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

      // Helper to console log in a Promise.then
      var testLog = function(res) { console.log(res); };

      chai.use(chaiAsPromised);
      chai.should();
      chai.expect();

      describe('Sanity check', function() {
        var createClient = exerptional.createClient;

        it('should successfully create a client', function () {
          var dummyBaseUrl = 'http://my.dummy.url/';
          var clientWithDummyBaseUrl = createClient.bind(null,dummyBaseUrl);

          expect(clientWithDummyBaseUrl).to.be.OK;
          }
        );

        it('should thrown an error for a client without a specified base URL', function () {
          var clientWithoutBaseUrl = createClient.bind(null, null);

            expect(clientWithoutBaseUrl).to.throw(Error, 'A base URL must be defined!');
        });
    });

    describe('List centers', function() {
      var createClient = exerptional.createClient,
          testBaseUrl = 'https://actic.exerp.com/actic/',
          client = createClient(testBaseUrl);

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
