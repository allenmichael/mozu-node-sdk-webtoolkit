var CreditResourceFactory = require('mozu-node-sdk/clients/commerce/customer/credit');

exports.creditCreated = function (apiContext, eventPayload) {
  console.log("Credit Created returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.creditDeleted = function (apiContext, eventPayload) {
  console.log("Credit Deleted returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.creditUpdated = function (apiContext, eventPayload) {
  console.log("Credit Updated returned -- preparing for work...");
  console.log(eventPayload.entityId);
};