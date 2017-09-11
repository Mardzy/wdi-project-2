const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  text: {type: String}
});

const photoSchema = new mongoose.Schema({
  artist: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true },
  caption: { type: String, required: true },
  comments: [ commentSchema ]
});

module.exports = mongoose.model('Photo', photoSchema);
