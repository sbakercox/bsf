const express = require('express')
const passport = require('passport')
const router = express.Router()
const authCon = require('../controllers/auth');
const { ensureAuth, ensureGuest } = require('../middleware/auth')

// //Login Page
// //@route GET /auth/login
router.get('/login',ensureGuest, authCon.getLogin);

//Auth with Google
//@route GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile']}))

//Google auth callback
//@route GET /auth/google/callback
router.get('/google/callback', passport.authenticate('google', {failureRedirect: '/'}), (req,res) => {
    res.redirect('/dash/home')
})

// //Logout Page
// //@route GET /auth/logout
router.get('/logout', authCon.logout);

module.exports = router