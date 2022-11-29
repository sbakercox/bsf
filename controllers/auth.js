const session = require('express-session')

//Login Page
//@route GET /auth/login
exports.getLogin = (req, res) => {
	res.render('login');
};

//Logout User
//@route GET /auth/logout
exports.logout = (req, res) => {
	req.logout((err) => {
		if (err) { return next(err); }
		console.log("User has logged out.");
		res.redirect("/");
	});
};