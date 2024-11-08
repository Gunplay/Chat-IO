import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

const protectRoute = async (req, res, next) => {
	console.log('Middleware:', req.user);
	try {
		const token = req.cookies.jwt;

		if (!token)
			res.status(401).json({ error: 'Unauthorized - No Token Provided' });

		const decoded = jwt.verify(token, process.env.JWT_SECRET);

		if (!decoded) {
			return res.status(401).json({ error: 'Unauthorized - Invalid Token' });
		}
		// The user in our DB
		const user = await User.findById(decoded.userId).select('-password');

		if (!user) {
			return res.status(404).json({ error: 'User not found' });
		}
		// Compare user and user in DB

		req.user = user; // DB user
		//req.user = { _id: decoded.user };
		// Next function gonna start after all of this functions above
		next();
	} catch (error) {
		console.log('Error in protectRoue middleware', error.message);
		res.status(500).json({ error: 'Internal server error' });
	}
};

export default protectRoute;
