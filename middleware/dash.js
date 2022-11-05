const User = require("../models/User");
const Profile = require('../models/Profile');
module.exports = {
    firstTimeUser: async (req, res, next) => {
        try {
            let profState = await User.findOne({_id: req.user._id});
            if (profState.profile == true ) {
                return next();
              } else {
                res.redirect('/predash');
              }
        } catch (err) {
            console.log(err);
        }
    },
}