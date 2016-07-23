(() => {
  "use strict";
  const router = require('express').Router(),
    Parking = require('../models/parking'),
    assert = require('assert');

<<<<<<< HEAD
  router.get('/', (req, res) => {
    console.log("hello world from home route");
=======
  router.get('/getAllParkings', (req, res) => {
    Parking.find({}, (err, doc) => {
      if (err) {
        res.json(err);
      } else {
        res.json(doc);
      }
    });

>>>>>>> 14f5b6cd16d2c850eb12e294c076f9e7ae4d6aa2
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

  var time1 = 0;
  var time2 = 0;
  router.put('/changeSlots', (req, res) => {
    let id = req.params.id;
    let park = req.params.park;
    if(id == 1) time1 = Date();
    if(id == 2) time2 = Date();
    if(time1 != 0 && time2 != 0){
      if(time1 < time2) {
        Parking.update({
          id: park
        }, {
          "$dec": {"freeSlots": 1}
          time1 = 0;
          time2 = 0;
        }, (err, doc) => {
          res.json({success: true});
        });
      } else {
        Parking.update({
        id: park
      }, {
        "$inc": {"freeSlots": 1}
        time1 = 0;
        time2 = 0;
      }, (err, doc) => {
        res.json({success: true});
      });
            }
        }

  });

  router.delete('/:id', (req, res) => {
    let id = req.params.id;
    Parking.remove({id: id}, (err, doc) => {
      console.log(doc);
    });
    res.send('Deleted! ID: ' + id)
  });



  module.exports = router;
})();
