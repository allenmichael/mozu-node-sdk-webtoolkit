var express = require('express');
var router = express.Router();
var Dispatcher = require('../util/event-dispatcher');
var apiContext = require('mozu-node-sdk/clients/platform/application')();
var isRequestValid = require('mozu-node-sdk/security/is-request-valid');
var transformContext = require('../util/transform-apiContext');

/* GET /mozu.events  */
router.get('/', function (req, res, next) {
  res.render('events', { title: 'Eventing' });
});

//Mozu Validation Middleware
router.use(function (req, res, next) {
  isRequestValid(apiContext.context, req, function (err) {
    if (err) {
      res.status(401);
      res.render('error', { message: err.message, error: err });
    } else {
      req.mozu = { isValid: true };
      next();
    }
  });
});

/* POST against /mozu.events */
router.post('/', function (req, res, next) {
  res.sendStatus(200);
  transformContext(req.headers, apiContext, function (err, newApiContext) {
    if (err) {
      console.error(err);
    } else {
      console.log("Is Valid? " + (req.mozu.isValid ? "\u2713" : "x"));
      var EventHandler = Dispatcher[req.body.topic];
      EventHandler(newApiContext, req.body);
    }
  });
});

module.exports = router;