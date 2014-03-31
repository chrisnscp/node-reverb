var _ = require('underscore'),
  prefs = require('../models/prefs.js');

// Rather than store the selected verbs, we'll store the deselected one.
exports.deselect = function (req, res) {
  prefs.deselectVerb(req.session, req.body.verb);
  console.log('Deselected %s', req.body.verb);
  res.end();
};

exports.select = function (req, res) {
  prefs.selectVerb(req.session, req.body.verb);
  console.log('Selected %s', req.body.verb);
  res.end();
};
