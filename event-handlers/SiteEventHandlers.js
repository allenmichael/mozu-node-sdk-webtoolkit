exports.siteCloned = function(apiContext, eventPayload) {
  console.log("Site Cloned returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.siteCreated = function(apiContext, eventPayload) {
  console.log("Site Created returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.siteDeleted = function(apiContext, eventPayload) {
  console.log("Site Deleted returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.siteUpdated = function(apiContext, eventPayload) {
  console.log("Site Updated returned -- preparing for work...");
  console.log(eventPayload.entityId);
};