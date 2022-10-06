//Landing Page
//@route GET '/'
exports.getLanding = (req, res) => {
	res.render('landing');
};

//Dashboard Page
//@route GET /dashboard
exports.getDashboard = (req, res) => {
	res.render('dashboard');
};
