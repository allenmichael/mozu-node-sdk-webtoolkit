var CartResourceFactory = require('mozu-node-sdk/clients/commerce/cart');

exports.cartCreated = function (apiContext, eventPayload) {
  console.log("Cart Created returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.cartDeleted = function (apiContext, eventPayload) {
  console.log("Cart Deleted returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.cartUpdated = function (apiContext, eventPayload) {
  console.log("Cart Updated returned -- preparing for work...");
  console.log(eventPayload.entityId);
};
