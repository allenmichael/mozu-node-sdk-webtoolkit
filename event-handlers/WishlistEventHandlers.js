var WishlistResourceFactory = require('mozu-node-sdk/clients/commerce/wishlist');

exports.wishlistCreated = function(apiContext, eventPayload) {
  console.log("Wishlist Created returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.wishlistDeleted = function(apiContext, eventPayload) {
  console.log("Wishlist Deleted returned -- preparing for work...");
  console.log(eventPayload.entityId);
};

exports.wishlistUpdated = function(apiContext, eventPayload) {
  console.log("Wishlist Updated returned -- preparing for work...");
  console.log(eventPayload.entityId);
};