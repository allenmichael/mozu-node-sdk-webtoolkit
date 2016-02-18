exports.emailRequested = function (apiContext, eventPayload) {
  console.log("Email Requested returned -- preparing for work...");
  console.log(eventPayload.entityId);
};