const express = require('express')
const router = express.Router()
const passport = require('passport')
const mainCon = require('../controllers/main');
const authCon = require('../controllers/auth');
const { ensureAuth, ensureGuest } = require('../middleware/auth')

//Landing Page
//@route GET '/'
router.get('/', mainCon.getLanding);

// //Login Page
// //@route GET /login
router.get('/login',ensureGuest, authCon.getLogin);

//Dashboard Page
//@route GET /dashboard
router.get('/dashboard', ensureAuth, mainCon.getDashboard);


module.exports = router