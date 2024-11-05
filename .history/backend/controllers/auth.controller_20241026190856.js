import User from '../models/user.model';

export const signup = async (req, res) => {
	try {
		const { fullName, userName, password, confirmPassword, gender } = req.body;

		if (password !== confirmPassword) {
			return res.status(400).json({ error: "Passwords don't match" });
		}

		const user = await User.findOne({ userName });

		if (user) {
			return res.status(400).json({ error: 'Username already exists' });
		}

		const girlGender = `https://avatar.iran.liara.run/public/boy?username=[value]`;
	} catch (error) {}
	// res.send('signupUser');
	// console.log('signupUser');
};

export const login = (req, res) => {
	res.send('loginUser');
	console.log('loginUser');
};

export const logOut = (req, res) => {
	res.send('logOutUser');
	console.log('logOutUser');
};
