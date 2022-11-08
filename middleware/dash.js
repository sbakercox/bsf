const User = require("../models/User");
const Profile = require('../models/Profile');
module.exports = {
    firstTimeUser: async (req, res, next) => {
        try {
            let userAccount = await User.findOne({_id: req.user._id});
            if (userAccount.profile == true ) {
                return next();
              } else {
                res.redirect('/dash/profile');
              }
        } catch (err) {
            console.log(err);
        }
    },
}