const express = require('express')
const router = express.Router()
const passport = require('passport')
const mainCon = require('../controllers/main');
const authCon = require('../controllers/auth');
const dashCon = require('../controllers/dash');
const { ensureAuth, ensureGuest } = require('../middleware/auth')
const {firstTimeUser, returningUser} = require('../middleware/dash')

//Landing Page
//@route GET '/'
router.get('/', mainCon.getLanding);

// //Login Page
// //@route GET /login
router.get('/login',ensureGuest, authCon.getLogin);

//Dashboard Page
//@route GET /dashboard
router.get('/dashboard',firstTimeUser ,ensureAuth, mainCon.getDashboard);

//Pre-Dashboard Page
//@route GET /predash
router.get('/predash', mainCon.getPredash);

//Create User Profile
//@route POST '/predash'
router.post('/predash', dashCon.createProfile);

module.exports = router