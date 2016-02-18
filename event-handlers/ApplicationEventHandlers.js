var ApplicationResourceFactory = require('mozu-node-sdk/clients/platform/application');

exports.applicationDisabled = function (apiContext, eventPayload) {
  console.log("Application Disabled returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.applicationEnabled = function (apiContext, eventPayload) {
  console.log("Application Enabled returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.applicationInstalled = function (apiContext, eventPayload) {
  console.log("Application Installed returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.applicationUninstalled = function (apiContext, eventPayload) {
  console.log("Application Uninstalled returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.applicationUpgraded = function (apiContext, eventPayload) {
  console.log("Application Upgraded returned -- preparing for work...");
  console.log(eventPayload.entityId);
};