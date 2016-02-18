var ReturnResourceFactory = require('mozu-node-sdk/clients/commerce/return');

exports.returnCancelled = function(apiContext, eventPayload) {
  console.log("Return Cancelled returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.returnClosed = function(apiContext, eventPayload) {
  console.log("Return Closed returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.returnOpened = function(apiContext, eventPayload) {
  console.log("Return Opened returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.returnRejected = function(apiContext, eventPayload) {
  console.log("Return Rejected returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.returnUpdated = function(apiContext, eventPayload) {
  console.log("Return Updated returned -- preparing for work...");
  console.log(eventPayload.entityId);
};