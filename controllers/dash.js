const cin = require("../middleware/cloud");
const mongoose = require('mongoose')
const Profile = require('../models/Profile')
const User = require('../models/User')

//Dashboard Page
//@route GET /dash/home
exports.getDashHome = (req, res) => {
	res.render('home');
};

//Pre-Dashboard Page
//@route GET /dash/profile
exports.getDashProfile = (req, res) => {
	res.render('profile');
};

//Create User Profile
//@route POST /dash/profile
exports.createProfile = async (req, res, next) => {
      try {
    // Upload image to cloudinary
      let cloudProfImg = await cin.uploader.upload(req.body.profileImg);  
      let cloudInitImg = await cin.uploader.upload(req.body.initImg); 
      console.log(req)
      await Profile.create({
        user: req.user._id,
        alias:req.body.alias,
        role: req.body.role,
        profileImg: cloudProfImg.secure_url,
        profileImgId: cloudProfImg.public_id,
        initImg: cloudInitImg.secure_url,
        initImgId: cloudInitImg.public_id,
        fitnessGoal: req.body.fitnessGoal,
        currentWeight: req.body.currentWeight,
        weightGoal: req.body.weightGoal,
        currentDiet: req.body.currentDiet,
        dietaryGoal: req.body.dietaryGoal,
        activityLevel: req.body.activityLevel,
        daysAvailable: req.body.daysAvailable,
        timesAvailable: req.body.timesAvailable,
        medConcerns: req.body.medConcerns,
        });
        console.log('Profile created');
      await User.findOneAndUpdate({_id: req.user._id}, {profile: true});
        console.log('Account Updated');
      res.redirect(`home`)
      }
      catch (err) {
        console.log(err);
      }
};
