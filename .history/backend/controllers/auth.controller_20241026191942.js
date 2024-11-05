import User from '../models/user.model.js';

export const signup = async (req, res) => {
	try {
		const { fullName, userName, password, confirmPassword, gender } = req.body; // work only with middleware

		if (password !== confirmPassword) {
			return res.status(400).json({ error: "Passwords don't match" });
		}

		const user = await User.findOne({ userName });

		if (user) {
			return res.status(400).json({ error: 'Username already exists' });
		}
		const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
		const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

		const newUser = new User({
			fullName,
			userName,
			password,
			girlProfilePile: gender === 'male' ? boyProfilePic : girlProfilePic,
		});
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
