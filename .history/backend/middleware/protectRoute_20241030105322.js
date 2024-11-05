const protectRoute = (req, res, next) => {
	try {
		const token = req.cookies.jwt;
	} catch (error) {
		console.log('Error in protectRoue middleware', error.message);
		res.status(500).json({ error: 'Internal server error' });
	}
};
