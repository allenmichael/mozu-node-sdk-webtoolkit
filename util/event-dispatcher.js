var topic = require('./event-names.js');

var ApplicationEventHandlers = require('../event-handlers/ApplicationEventHandlers');
var ProductAttributeEventHandlers = require('../event-handlers/ProductAttributeEventHandlers');
var CartEventHandlers = require('../event-handlers/CartEventHandlers');
var CategoryEventHandlers = require('../event-handlers/CategoryEventHandlers');
var CreditEventHandlers = require('../event-handlers/CreditEventHandlers');
var CustomerAccountEventHandlers = require('../event-handlers/CustomerAccountEventHandlers');
var CustomerSegmentEventHandlers = require('../event-handlers/CustomerSegmentEventHandlers');
var DiscountEventHandlers = require('../event-handlers/DiscountEventHandlers');
var EmailEventHandlers = require('../event-handlers/EmailEventHandlers');
var FacetEventHandlers = require('../event-handlers/FacetEventHandlers');
var LocationTypeEventHandlers = require('../event-handlers/LocationTypeEventHandlers');
var OrderEventHandlers = require('../event-handlers/OrderEventHandlers');
var ProductEventHandlers = require('../event-handlers/ProductEventHandlers');
var ProductTypeEventHandlers = require('../event-handlers/ProductTypeEventHandlers');
var ReturnEventHandlers = require('../event-handlers/ReturnEventHandlers');
var SearchSettingsEventHandlers = require('../event-handlers/SearchSettingsEventHandlers');
var ShipmentEventHandlers = require('../event-handlers/ShipmentEventHandlers');
var SiteEventHandlers = require('../event-handlers/SiteEventHandlers');
var TenantEventHandlers = require('../event-handlers/TenantEventHandlers');
var WishlistEventHandlers = require('../event-handlers/WishlistEventHandlers');

var Dispatcher = {};
//Application Events
Dispatcher[topic.APPLICATIONDISABLED] = ApplicationEventHandlers.applicationDisabled;
Dispatcher[topic.APPLICATIONENABLED] = ApplicationEventHandlers.applicationEnabled;
Dispatcher[topic.APPLICATIONINSTALLED] = ApplicationEventHandlers.applicationInstalled;
Dispatcher[topic.APPLICATIONUNINSTALLED] = ApplicationEventHandlers.applicationUninstalled;
Dispatcher[topic.APPLICATIONUPGRADED] = ApplicationEventHandlers.applicationUpgraded,
//Product Attribute Events
Dispatcher[topic.ATTRIBUTECREATED] = ProductAttributeEventHandlers.attributeCreated;
Dispatcher[topic.ATTRIBUTEDELETED] = ProductAttributeEventHandlers.attributeDeleted;
Dispatcher[topic.ATTRIBUTEUPDATED] = ProductAttributeEventHandlers.attributeUpdated;
//Cart Events
Dispatcher[topic.CARTCREATED] = CartEventHandlers.cartCreated;
Dispatcher[topic.CARTDELETED] = CartEventHandlers.cartDeleted;
Dispatcher[topic.CARTUPDATED] = CartEventHandlers.cartUpdated;
//Category Events
Dispatcher[topic.CATEGORYCREATED] = CategoryEventHandlers.categoryCreated;
Dispatcher[topic.CATEGORYDELETED] = CategoryEventHandlers.categoryDeleted;
Dispatcher[topic.CATEGORYUPDATED] = CategoryEventHandlers.categoryUpdated;
//Credit Events
Dispatcher[topic.CREDITCREATED] = CreditEventHandlers.creditCreated;
Dispatcher[topic.CREDITDELETED] = CreditEventHandlers.creditDeleted;
Dispatcher[topic.CREDITUPDATED] = CreditEventHandlers.creditUpdated;
//Customer Account Events
Dispatcher[topic.CUSTOMERACCOUNTCREATED] = CustomerAccountEventHandlers.customerAccountCreated;
Dispatcher[topic.CUSTOMERACCOUNTUPDATED] = CustomerAccountEventHandlers.customerAccountUpdated;
Dispatcher[topic.CUSTOMERACCOUNTDELETED] = CustomerAccountEventHandlers.customerAccountDeleted;
//Customer Segment Events
Dispatcher[topic.CUSTOMERSEGMENTCREATE] = CustomerSegmentEventHandlers.customerSegmentCreated;
Dispatcher[topic.CUSTOMERSEGMENTCUSTOMERADDED] = CustomerSegmentEventHandlers.customerSegmentCustomerAdded;
Dispatcher[topic.CUSTOMERSEGMENTCUSTOMERREMOVED] = CustomerSegmentEventHandlers.customerSegmentCustomerRemoved;
Dispatcher[topic.CUSTOMERSEGMENTDELETE] = CustomerSegmentEventHandlers.customerSegmentDeleted;
Dispatcher[topic.CUSTOMERSEGMENTUPDATED] = CustomerSegmentEventHandlers.customerSegmentUpdated;
//Discount Events
Dispatcher[topic.DISCOUNTCREATED] = DiscountEventHandlers.discountCreated;
Dispatcher[topic.DISCOUNTDELETED] = DiscountEventHandlers.discountDeleted;
Dispatcher[topic.DISCOUNTEXPIRED] = DiscountEventHandlers.discountExpired;
Dispatcher[topic.DISCOUNTUPDATED] = DiscountEventHandlers.discountUpdated;
//Email Events
Dispatcher[topic.EMAILREQUESTED] = EmailEventHandlers.emailRequested;
//Facet Events
Dispatcher[topic.FACETCREATED] = FacetEventHandlers.facetCreated;
Dispatcher[topic.FACETDELETED] = FacetEventHandlers.facetDeleted;
Dispatcher[topic.FACETUPDATED] = FacetEventHandlers.facetUpdated;
//Location Type Events
Dispatcher[topic.LOCATIONTYPECREATED] = LocationTypeEventHandlers.locationTypeCreated;
Dispatcher[topic.LOCATIONTYPEDELETED] = LocationTypeEventHandlers.locationTypeDeleted;
Dispatcher[topic.LOCATIONTYPEUPDATED] = LocationTypeEventHandlers.locationTypeUpdated;
//Order Events
Dispatcher[topic.ORDERABANDONED] = OrderEventHandlers.orderAbandoned;
Dispatcher[topic.ORDERCANCELLED] = OrderEventHandlers.orderCancelled;
Dispatcher[topic.ORDERCLOSED] = OrderEventHandlers.orderClosed;
Dispatcher[topic.ORDERFULFILLED] = OrderEventHandlers.orderFulfilled;
Dispatcher[topic.ORDEROPENED] = OrderEventHandlers.orderOpened;
Dispatcher[topic.ORDERPENDINGREVIEW] = OrderEventHandlers.orderPendingReview;
Dispatcher[topic.ORDERUPDATED] = OrderEventHandlers.orderUpdated;
//Product Events
Dispatcher[topic.PRODUCTCODERENAMED] = ProductEventHandlers.productCodeRenamed;
Dispatcher[topic.PRODUCTCREATED] = ProductEventHandlers.productCreated;
Dispatcher[topic.PRODUCTDELETED] = ProductEventHandlers.productDeleted;
Dispatcher[topic.PRODUCTUPDATED] =  ProductEventHandlers.productUpdated;
//Product Publishing Events
Dispatcher[topic.PRODUCTDRAFTCREATED] = ProductEventHandlers.productDraftCreated; 
Dispatcher[topic.PRODUCTDRAFTDELETED] = ProductEventHandlers.productDraftDeleted;
Dispatcher[topic.PRODUCTDRAFTDISCARDED] = ProductEventHandlers.productDraftDiscarded;
Dispatcher[topic.PRODUCTDRAFTPUBLISHED] = ProductEventHandlers.productDraftPublished;
Dispatcher[topic.PRODUCTDRAFTUPDATED] = ProductEventHandlers.productDraftUpdated;
//Product Inventory Events
Dispatcher[topic.PRODUCTINVENTORYINSTOCK] = ProductEventHandlers.productInventoryInStock;
Dispatcher[topic.PRODUCTINVENTORYOUTOFSTOCK] = ProductEventHandlers.productInventoryOutOfStock;
Dispatcher[topic.PRODUCTINVENTORYUPDATED] = ProductEventHandlers.productInventoryUpdated;
//Product Type Events
Dispatcher[topic.PRODUCTTYPECREATED] = ProductTypeEventHandlers.productTypeCreated;
Dispatcher[topic.PRODUCTTYPEDELETED] = ProductTypeEventHandlers.productTypeDeleted;
Dispatcher[topic.PRODUCTTYPEUPDATED] = ProductTypeEventHandlers.productTypeUpdated;
//Return Events
Dispatcher[topic.RETURNCANCELLED] = ReturnEventHandlers.returnCancelled;
Dispatcher[topic.RETURNCLOSED] = ReturnEventHandlers.returnClosed;
Dispatcher[topic.RETURNOPENED] = ReturnEventHandlers.returnOpened;
Dispatcher[topic.RETURNREJECTED] = ReturnEventHandlers.returnRejected;
Dispatcher[topic.RETURNUPDATED] = ReturnEventHandlers.returnUpdated;
//Search Settings Events
Dispatcher[topic.SEARCHSETTINGSUPDATED] = SearchSettingsEventHandlers.searchSettingsUpdated;
//Shipment Events
Dispatcher[topic.SHIPMENTFULFILLED] = ShipmentEventHandlers.shipmentFulfilled;
//Site Events
Dispatcher[topic.SITECLONED] = SiteEventHandlers.siteCloned;
Dispatcher[topic.SITECREATED] = SiteEventHandlers.siteCreated;
Dispatcher[topic.SITEDELETED] = SiteEventHandlers.siteDeleted;
Dispatcher[topic.SITEUPDATED] = SiteEventHandlers.siteUpdated;
//Tenant Events
Dispatcher[topic.TENANTDELETED] = TenantEventHandlers.tenantDeleted;
Dispatcher[topic.TENANTUPDATED] = TenantEventHandlers.tenantUpdated;
//Wishlist Events
Dispatcher[topic.WISHLISTCREATED] = WishlistEventHandlers.wishlistCreated;
Dispatcher[topic.WISHLISTDELETED] = WishlistEventHandlers.wishlistDeleted;
Dispatcher[topic.WISHLISTUPDATED] = WishlistEventHandlers.wishlistUpdated;

module.exports = Dispatcher;