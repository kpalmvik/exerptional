define([
    'intern!bdd',
    'intern/chai!expect',
    'intern/chai!',
    'intern/dojo/node!chai-as-promised',
    'intern/dojo/node!../exerptional' // Load as a NPM CommonJS module
], function (bdd, expect, chai, chaiAsPromised, exerptional) {
      var describe = bdd.describe,
          it = bdd.it,
          beforeEach = bdd.beforeEach;

      chai.use(chaiAsPromised);
      chai.should();

      describe('Sanity check', function() {
        var createClient = exerptional.createClient;

        it('should successfully create a client', function () {
          var dummyBaseUrl = 'http://dummy.url/';

          expect(
            createClient(dummyBaseUrl),
            'Create a client with a specified base URL as required')
              .to.be.OK;
          }
        );

        it('should thrown an error for a client without a specified base URL', function () {
            expect(
              createClient,
              'Create a should result in an error')
                .to.throw(Error, 'A base URL must be defined!');
          }
        );
    });

    describe('List centers', function() {
      var createClient = exerptional.createClient,
          dummyUrl = 'http://dummy.url/',
          client;

      beforeEach(function () {
          client = createClient(dummyUrl);
      });

      it('should return an array eventually', function() {
        return client.centers.all().should.eventually.be.an.array;
      });

      it('should have at least one center in the array', function() {
        return client.centers.all().should.eventually.not.be.empty;
      });
    });
});
