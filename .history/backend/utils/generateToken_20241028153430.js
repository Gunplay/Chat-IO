import jwt from 'jsonwebtoken';

const generateTokenAndSetCookie = (userId, res) => {
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: '15d',
	});
	console.log('token', token);
	res.cookie('jwt', token, {
		maxAge: 15 * 24 * 60 * 60 * 1000,
		httpOnly: true, // prevent XXS attacks cross-site scripting attacks
		sameSite: 'strict', // CSRF attacks cross-site request forgery attacks
	});
};
generateTokenAndSetCookie(23, 2);
export default generateTokenAndSetCookie;
