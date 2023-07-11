//Mongoose schema necessary to connect to MongoDB.
//It includes just name and email fields represented as strings.
const mongoose = require('mongoose');
const registrationSchema = new mongoose.Schema({
   name: {
      type: String,
      trim: true,
   },
   email: {
      type: String,
      trim: true,
   },
});

module.exports = mongoose.model('Registration', registrationSchema);