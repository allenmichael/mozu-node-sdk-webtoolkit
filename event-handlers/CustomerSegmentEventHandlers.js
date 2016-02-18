var CustomerSegmentResourceFactory = require('mozu-node-sdk/clients/commerce/customer/customerSegment');

exports.customerSegmentCreated = function (apiContext, eventPayload) {
  console.log("Customer Segment Created returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.customerSegmentCustomerAdded = function (apiContext, eventPayload) {
  console.log("Customer Segment Customer Added returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.customerSegmentCustomerRemoved = function (apiContext, eventPayload) {
  console.log("Customer Segment Customer Removed returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.customerSegmentDeleted = function (apiContext, eventPayload) {
  console.log("Customer Segment Deleted returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.customerSegmentUpdated = function (apiContext, eventPayload) {
  console.log("Customer Segment Updated returned -- preparing for work...");
  console.log(eventPayload.entityId);
};