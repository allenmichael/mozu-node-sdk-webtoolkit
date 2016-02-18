var OrderResourceFactory = require('mozu-node-sdk/clients/commerce/order');

exports.orderAbandoned = function (apiContext, eventPayload) {
  console.log("Order Abandoned returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.orderCancelled = function (apiContext, eventPayload) {
  console.log("Order Cancelled returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.orderClosed = function (apiContext, eventPayload) {
  console.log("Order Closed returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.orderFulfilled = function (apiContext, eventPayload) {
  console.log("Order Fulfilled returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.orderOpened = function (apiContext, eventPayload) {
  console.log("Order Opened returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.orderPendingReview = function (apiContext, eventPayload) {
  console.log("Order Pending Review returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.orderUpdated = function (apiContext, eventPayload) {
  console.log("Order Updated returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

