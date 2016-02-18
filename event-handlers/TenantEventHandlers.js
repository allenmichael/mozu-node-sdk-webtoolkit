exports.tenantDeleted = function(apiContext, eventPayload) {
  console.log("Tenant Deleted returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.tenantUpdated = function(apiContext, eventPayload) {
  console.log("Tenant Updated returned -- preparing for work...");
  console.log(eventPayload.entityId);
};