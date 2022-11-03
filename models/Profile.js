const mongoose = require('mongoose')
const bcrypt = require("bcrypt");

const ProfileSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    alias: { type: String, required: true },
    role: { type: String, required: true },
    // profileImg: { type: String, required: true },
    // initImg: { type: String, required: true },
    fitnessGoal: { type: Number, required: true },
    currentWeight: { type: Number, required: true },
    weightGoal: { type: Number, required: true },
    currentDiet: { type: Number, required: true },
    dietaryGoal: { type: Number, required: true },
    activityLevel: { type: Number, required: true },
    daysAvailable: { type: Array, required: true },
    timesAvailable: { type: Array, required: true },
    medConcerns: { type: String, required: true },
  });

  module.exports = mongoose.model('Profile', ProfileSchema)