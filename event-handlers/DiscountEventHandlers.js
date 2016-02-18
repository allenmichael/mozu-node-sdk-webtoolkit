var DiscountResourceFactory = require('mozu-node-sdk/clients/commerce/catalog/admin/discount');

exports.discountCreated = function (apiContext, eventPayload) {
  console.log("Discount Created returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.discountDeleted = function (apiContext, eventPayload) {
  console.log("Discount Deleted returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.discountExpired = function (apiContext, eventPayload) {
  console.log("Discount Expired returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.discountUpdated = function (apiContext, eventPayload) {
  console.log("Discount Updated returned -- preparing for work...");
  console.log(eventPayload.entityId);
};