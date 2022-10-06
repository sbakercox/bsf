const mongoose = require('mongoose')
const bcrypt = require("bcrypt");

const GoogleSchema = new mongoose.Schema({
    googleId: { type: String, required: true },
    displayName: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    profile: { type: Boolean, default: false },
  });

  module.exports = mongoose.model('User', GoogleSchema)