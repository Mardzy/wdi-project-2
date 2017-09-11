const mongoose = require('mongoose');

const typesSchema = new mongoose.Schema({
  image: { type: String },
  type: { type: String }
});

module.exports = mongoose.model('Type', typesSchema);
