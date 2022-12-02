const mongoose = require('mongoose')

const ProfileSchema = new mongoose.Schema({
    user: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    alias: {type: String, required: true},
    role: {type: String, required: true},
    profileImg: {type: String},
    profileImgId: {type: String},
    initImg: {type: String},
    initImgId: {type: String},
    fitnessGoal: {type: String, required: true},
    currentWeight: {type: String, required: true},
    weightGoal: {type: String, required: true},
    currentDiet: {type: String, required: true},
    dietaryGoal: {type: String, required: true},
    activityLevel: {type: String, required: true},
    daysAvailable: {type: Array, required: true},
    timesAvailable: {type: Array, required: true},
    medConcerns: {type: String, required: true},
  });

  module.exports = mongoose.model('Profile', ProfileSchema)