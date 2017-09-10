const mongoose = require('mongoose');



const creationSchema = new mongoose.Schema({
  artist: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true },
  caption: { type: String, required: true }
});

module.exports = mongoose.model('Creation', creationSchema);
