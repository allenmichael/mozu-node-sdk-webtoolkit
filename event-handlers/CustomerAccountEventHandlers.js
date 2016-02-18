var CustomerAccountResourceFactory = require('mozu-node-sdk/clients/commerce/customer/customerAccount');
var log = require('../util/logging').LogToConsole;
var report = require('../util/logging').ReportErrorToConsole;

exports.customerAccountCreated = function (apiContext, eventPayload) {
  console.log("Customer Account Created returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.customerAccountUpdated = function (apiContext, eventPayload) {
  console.log("Customer Account Updated returned -- preparing for work...");
  console.log(eventPayload.entityId);
  var customerAccountResource = CustomerAccountResourceFactory(apiContext);
  customerAccountResource.getAccount({ accountId: eventPayload.entityId })
    .then(log)
    .catch(report);
};

exports.customerAccountDeleted = function(apiContext, eventPayload) {
  console.log("Customer Account Deleted returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

