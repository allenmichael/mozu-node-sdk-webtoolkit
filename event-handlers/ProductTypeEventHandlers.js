var ProductTypeResourceFactory = require('mozu-node-sdk/clients/commerce/catalog/admin/attributedefinition/productType');

exports.productTypeCreated = function(apiContext, eventPayload) {
  console.log("Product Type Created returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.productTypeDeleted = function(apiContext, eventPayload) {
  console.log("Product Type Deleted returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.productTypeUpdated = function(apiContext, eventPayload) {
  console.log("Product Type Updated returned -- preparing for work...");
  console.log(eventPayload.entityId);
};