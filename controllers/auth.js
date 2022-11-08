const session = require('express-session')

//Login Page
//@route GET /auth/login
exports.getLogin = (req, res) => {
	res.render('login');
};

//Logout User
//@route GET /auth/logout
exports.logout = (req, res) => {
	req.logout(() => {
		console.log("User has logged out.");
	});
	req.session.destroy((err) => {
		if (err) { return next(err); }
		console.log("Error : Failed to destroy the session during logout.", err);
		req.user = null;
	});
    res.redirect("/");
};