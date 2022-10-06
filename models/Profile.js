const mongoose = require('mongoose')
const bcrypt = require("bcrypt");

const ProfileSchema = new mongoose.Schema({
    profileImg: { type: String, required: true },
    initImg: { type: String, required: true },
    daysAvailable: { type: String, required: true },
    timesAvailable: { type: String, required: true },
    currentWeight: { type: Number, required: true },
    goalWeight: { type: Number, required: true },
    currentFitness: { type: String, required: true },
    goalFitness: { type: String, required: true },
    currentDiet: { type: String, required: true },
    goalDiet: { type: String, required: true },
    medConcerns: { type: String, required: true },
  });

  module.exports = mongoose.model('Profile', ProfileSchema)