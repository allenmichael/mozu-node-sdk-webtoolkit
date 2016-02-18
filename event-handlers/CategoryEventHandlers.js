var CategoryResourceFactory = require('mozu-node-sdk/clients/commerce/catalog/admin/category');

exports.categoryCreated = function (apiContext, eventPayload) {
  console.log("Category Created returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.categoryDeleted = function (apiContext, eventPayload) {
  console.log("Category Deleted returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.categoryUpdated = function (apiContext, eventPayload) {
  console.log("Category Updated returned -- preparing for work...");
  console.log(eventPayload.entityId);
};