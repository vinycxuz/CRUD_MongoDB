const mongoose = require('mongoose');

const loveSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },

});

const Love = mongoose.model('Love', loveSchema);
module.exports = Love;
