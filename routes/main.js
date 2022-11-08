const express = require('express')
const router = express.Router()
const mainCon = require('../controllers/main');



//Landing Page
//@route GET '/'
router.get('/', mainCon.getLanding);


module.exports = router