var SearchSettingsResourceFactory = require('mozu-node-sdk/clients/commerce/catalog/admin/search');

exports.searchSettingsUpdated = function(apiContext, eventPayload) {
  console.log("Search Settings Updated returned -- preparing for work...");
  console.log(eventPayload.entityId);
};