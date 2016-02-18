var ShipmentResourceFactory = require('mozu-node-sdk/clients/commerce/orders/shipment');

exports.shipmentFulfilled = function(apiContext, eventPayload) {
  console.log("Shipment Fulfilled returned -- preparing for work...");
  console.log(eventPayload.entityId);
};