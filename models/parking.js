(() => {
  "use strict";

  const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

  let ParkingSchema = new Schema({
    street: String,
    info: String,
    area: Number,
    slots: Number,
    lat: Number,
    long: Number,
<<<<<<< HEAD
    imgs: [],
=======
    img: String,
>>>>>>> 14f5b6cd16d2c850eb12e294c076f9e7ae4d6aa2
    freeSlots: Number,
    id: Number
  });

  let Parking = mongoose.model('Parking', ParkingSchema);

  module.exports = Parking;

})();
