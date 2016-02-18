var ProductAttributeResourceFactory = require('mozu-node-sdk/clients/commerce/catalog/admin/attributedefinition/attribute');

exports.attributeCreated = function(apiContext, eventPayload) {
  console.log("Product Attribute Created returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.attributeDeleted = function(apiContext, eventPayload) {
  console.log("Product Attribute Deleted returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.attributeUpdated = function(apiContext, eventPayload) {
  console.log("Product Attribute Updated returned -- preparing for work...");
  console.log(eventPayload.entityId);
};