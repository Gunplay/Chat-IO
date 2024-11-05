import jwt from 'jsonwebtoken';

const protectRoute = (req, res, next) => {
	try {
		const token = req.cookies.jwt;
		if (!token) {
			return res.status(401).json({ error: 'No token, authorization denied.' });
		}

		const decoded = jwt.verify(token, process.env.JWT_SECRET);
		req.user = { _id: decoded.userId }; // Ensure _id is set properly
		next();
	} catch (error) {
		res.status(403).json({ error: 'Token is invalid or expired.' });
	}
};

export default protectRoute;
