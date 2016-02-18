var LocationTypeResourceFactory = require('mozu-node-sdk/clients/commerce/admin/locationType');

exports.locationTypeCreated = function (apiContext, eventPayload) {
  console.log("Location Type Created returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.locationTypeDeleted = function (apiContext, eventPayload) {
  console.log("Location Type Deleted returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.locationTypeUpdated = function (apiContext, eventPayload) {
  console.log("Location Type Updated returned -- preparing for work...");
  console.log(eventPayload.entityId);
};