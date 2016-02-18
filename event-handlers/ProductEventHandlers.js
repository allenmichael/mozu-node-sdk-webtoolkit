var ProductAdminResourceFactory = require('mozu-node-sdk/clients/commerce/catalog/admin/product');
var ProductAdminLocationInventoryResourceFactory = require('mozu-node-sdk/clients/commerce/catalog/admin/products/locationInventory');
var ProductStorefrontResourceFactory = require('mozu-node-sdk/clients/commerce/catalog/storefront/product');

exports.productCodeRenamed = function(apiContext, eventPayload) {
  console.log("Product Created returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.productCreated = function(apiContext, eventPayload) {
  console.log("Product Created returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.productDeleted = function(apiContext, eventPayload) {
  console.log("Product Deleted returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.productUpdated = function(apiContext, eventPayload) {
  console.log("Product Updated returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.productDraftCreated = function(apiContext, eventPayload) {
  console.log("Product Draft Created returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.productDraftDeleted = function(apiContext, eventPayload) {
  console.log("Product Draft Deleted returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.productDraftDiscarded = function(apiContext, eventPayload) {
  console.log("Product Draft Discarded returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.productDraftPublished = function(apiContext, eventPayload) {
  console.log("Product Draft Published returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.productDraftUpdated = function(apiContext, eventPayload) {
  console.log("Product Draft Updated returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.productInventoryInStock = function(apiContext, eventPayload) {
  console.log("Product Inventory InStock returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.productInventoryOutOfStock = function(apiContext, eventPayload) {
  console.log("Product Inventory OutOfStock returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.productInventoryUpdated = function(apiContext, eventPayload) {
  console.log("Product Inventory Updated returned -- preparing for work...");
  console.log(eventPayload.entityId);
};