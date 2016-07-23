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
    console.log('got a post')
    let parking = req.body;
    // grab the parking model
    let Parking = require('../models/parking');

    // create a new user
    var newParking = Parking(parking);

    // save the user
    newParking.save(function(err) {
      if (err) throw err;
      console.log('Parking created!');
    });
    res.send({message: 'parking created'});
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
