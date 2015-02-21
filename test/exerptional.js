define([
    'intern!object',
    'intern/chai!expect',
    'intern/dojo/node!../exerptional' // Load as a NPM CommonJS module
], function (registerSuite, expect, exerptional) {
  registerSuite({
          name: 'exerptional',

          createClient: function () {
            var createClient = exerptional.createClient;
            var dummyBaseUrl = 'http://dummy.url/';

            expect(
              createClient(dummyBaseUrl),
              'Create a client with a specified base URL as required')
                .to.be.OK;

            expect(
              createClient,
              'Create a client without a specified base URL should result in an error')
                .to.throw(Error, 'A base URL must be defined!');
          }
      });
});
