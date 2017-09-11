const mongoose = require('mongoose');

const artistSchema = new mongoose.Schema({
  name: { type: String },
  description: { type: String },
  styles: { type: String },
  image: { type: String },
  caption: { type: String }
});

module.exports = mongoose.model('Artist', artistSchema );
