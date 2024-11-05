import bcrypt from 'bcryptjs';
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

		// Create hash password here

		const salt = await bcrypt.genSalt(10);
		const hashPassword = await bcrypt.hash(password, salt);

		const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${userName}`;
		const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${userName}`;

		const newUser = new User({
			fullName,
			userName,
			password: hashPassword,
			gender,
			profilePic: gender === 'male' ? boyProfilePic : girlProfilePic,
		});

		await newUser.save();

		res.status(201).json({
			_id: newUser._id,
			fullName: newUser.fullName,
			userName: newUser.userName,
			boyProfilePic: newUser.profilePic,
		});
	} catch (error) {
		console.log('Error with signup controller', error.message);
		res.status(500).json({ error: 'Internal Server Error' });
	}
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
