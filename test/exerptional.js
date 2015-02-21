define([
    'intern!bdd',
    'intern/chai!expect',
    'intern/dojo/node!../exerptional' // Load as a NPM CommonJS module
], function (bdd, expect, exerptional) {
      var describe = bdd.describe,
          it = bdd.it;

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
});
