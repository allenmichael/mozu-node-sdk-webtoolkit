var FacetResourceFactory = require('mozu-node-sdk/clients/commerce/catalog/admin/facet');

exports.facetCreated = function (apiContext, eventPayload) {
  console.log("Facet Created returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.facetDeleted = function (apiContext, eventPayload) {
  console.log("Facet Deleted returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.facetUpdated = function (apiContext, eventPayload) {
  console.log("Facet Deleted returned -- preparing for work...");
  console.log(eventPayload.entityId);
};