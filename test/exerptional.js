define([
    'intern!object',
    'intern/chai!expect',
    'intern/dojo/node!../exerptional' // Load as a NPM CommonJS module
], function (registerSuite, expect, exerptional) {
  registerSuite({
          name: 'exerptional',

          listClubs: function () {
            expect(exerptional.listClubs()).to.be.an('object');
          },
          setup: function () {
            expect(exerptional.setup('http://url/')).to.be.undefined;
          }
      });
});
