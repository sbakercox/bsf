const User = require("../models/User");
module.exports = {
    firstTimeUser: async (req, res, next) => {
        try {
            const profState = await User.find({profile: req.user.profile});
            if (profState[0].profile == true ) {
                return next();
              } else {
                res.redirect('/predash');
              }
        } catch (err) {
            console.log(err);
        }
    },
}