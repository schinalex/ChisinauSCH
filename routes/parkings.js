(() => {
  "use strict";
  const router = require('express').Router(),
    Parking = require('../models/parking'),
    assert = require('assert');

  router.get('/', (req, res) => {

  });

  router.get('/:id', (req, res) => {
    let id = req.params.id;

    Parking.find({
      id: id
    }, (err, doc) => {
      if (err) {
        res.json(err);
      } else {
        res.json(doc);
      }
    });

  });

  // create
  router.post('/', (req, res) => {
    let parking = req.query || req.params;
  });

  router.put('/:id', (req, res) => {
    let id = req.params.id;
    Parking.update({
      id: id
    }, {
      "$inc": {"slots": 1}
    }, (err, doc) => {
      res.json({success: true});
    });
  });

  router.delete('/:id', (req, res) => {

  });



  module.exports = router;
})();
