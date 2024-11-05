const protectRoute = (req, res, next) => {
	try {
		const token = req.cookies.jwt;

		if (!token)
			res.status(401).json({ error: 'Unauthorized - No Token Provided' });
	} catch (error) {
		console.log('Error in protectRoue middleware', error.message);
		res.status(500).json({ error: 'Internal server error' });
	}
};
