const mongoose = require('mongoose');

const termsSchema = new mongoose.Schema({
  headline: { type: String },
  description: { type: String }
});

module.exports = mongoose.model('Term', termsSchema);
