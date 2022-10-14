const mongoose = require('mongoose')
const bcrypt = require("bcrypt");

const ProfileSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    profileImg: { type: String, required: true },
    initImg: { type: String, required: true },
    daysAvailable: { type: String, required: true },
    timesAvailable: { type: String, required: true },
    currentWeight: { type: Number, required: true },
    weightGoal: { type: Number, required: true },
    activityLevel: { type: String, required: true },
    fitnessGoal: { type: String, required: true },
    currentDiet: { type: String, required: true },
    medConcerns: { type: String, required: true },
  });

  module.exports = mongoose.model('Profile', ProfileSchema)