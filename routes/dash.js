const express = require('express')
const router = express.Router()
const mainCon = require('../controllers/main');
const dashCon = require('../controllers/dash');


//Create User Profile
//@route POST '/predash'
router.post('/predash', dashCon.createProfile);


module.exports = router