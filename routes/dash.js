const express = require('express')
const router = express.Router()
const dashCon = require('../controllers/dash');
const { ensureAuth, ensureGuest } = require('../middleware/auth')
const {firstTimeUser} = require('../middleware/dash')


//Dashboard Page
//@route GET /dash/home
router.get('/home',firstTimeUser ,ensureAuth, dashCon.getDashHome);

//Pre-Dashboard Page
//@route GET /dash/profile
router.get('/profile', dashCon.getDashProfile);

//Create User Profile
//@route POST /dash/profile
router.post('/dash/profile', dashCon.createProfile);

module.exports = router