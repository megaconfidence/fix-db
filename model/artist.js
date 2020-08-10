const mongoose = require('mongoose');

const Artist = new mongoose.Schema({
  name: {
    trim: true,
    unique: true,
    type: String,
    required: true,
    lowercase: true
  },
  createdAt: { type: Date, default: Date.now }
});

Artist.index({ name: 'text' });
module.exports = mongoose.model('artist', Artist);