(function() {
  /*
    Module dependencies
  */

  var cheerio = require('cheerio');
  var Promise = require('promise');
  var agent = require('superagent-promise');

  var centerListPage = 'SearchClassActivities.do';

  /* Functions */

  var retrieveHtml = function(baseUrl, baseCenterId) {
    var getCenterUrl = baseUrl + centerListPage;

    // Return a promise with the retrieved HTML
    return agent
            .get(getCenterUrl)
            .query({ centerid: baseCenterId })
            .end()
            .catch(function(err) {
              // Could not retrieve any HTML
              return([]);
              });
  };

  var parseHtmlToArray = function(response) {
    // Use Cheerio to parse the HTML tag soup
    var $ = cheerio.load(response.text);

    // Centers are defined in the HTML as:
    // <select name="selectedCenterIds">
    //  <option value="{center}">{centerName}</option>
    //  ...
    // </select>
    var selectElement = $('select[name=selectedCenterIds]')
    var allOptionElements = selectElement.find('option');

    var allCentersArray = allOptionElements.map(
        function(i, elem) {
          var centerId = $(elem).attr('value');
          var centerName = ($(elem).text() || '').trim();

          // Return an object for each center
          return({
                  id: centerId,
                  name: centerName
                });
        }
      ).toArray();

    return allCentersArray;
  }

  var Centers = module.exports = function(baseUrl, baseCenterId) {
    var allCenters = function() {
      return retrieveHtml(baseUrl, baseCenterId).then(parseHtmlToArray);
    };

    return {
      all: allCenters
    };
  };
})();
