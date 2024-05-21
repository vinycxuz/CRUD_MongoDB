const mongoose = require('mongoose');

const loveSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
    timestamps: true,

});

const Love = mongoose.model('Love', loveSchema);
module.exports = Love;
