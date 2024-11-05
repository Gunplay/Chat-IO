import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: process.env.JWT_EXPIRES_IN || '15d', // use env var if available
	});
	console.log('Generated JWT:', token);

	res.cookie('jwt', token, {
		maxAge: 15 * 24 * 60 * 60 * 1000, // or use an env var for flexibility
		httpOnly: true, // prevent cross-site scripting attacks
		sameSite: 'strict', // prevent CSRF attacks
		secure: process.env.NODE_ENV !== 'development', // use HTTPS in production
		path: '/', // make cookie available across the app
	});
};

export default generateTokenAndSetCookie;
