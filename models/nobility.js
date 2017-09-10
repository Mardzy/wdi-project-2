const mongoose = require('mongoose');

const nobilitySchema = new mongoose.Schema({
  name: { type: String },
  nationality: { type: String },
  age: { type: String },
  styles: { type: String },
  image: { type: String },
  caption: { type: String }
});

module.exports = mongoose.model('Nobility', nobilitySchema );
