(() => {
  "use strict";
  const router = require('express').Router(),
    Parking = require('../models/parking'),
    assert = require('assert');

  router.get('/getAllParkings', (req, res) => {
    Parking.find({}, (err, doc) => {
      if (err) {
        res.json(err);
      } else {
        res.json(doc);
      }
    });

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
    let parking = req.body;

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
    let id = req.params.id;
    Parking.remove({id: id}, (err, doc) => {
      console.log(doc);
    });
    res.json({success: true, id: id})
  });



  module.exports = router;
})();
