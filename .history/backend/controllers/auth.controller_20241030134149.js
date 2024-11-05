import bcrypt from 'bcryptjs';
import User from '../models/user.model.js';
import generateTokenAndSetCookie from '../utils/generateToken.js';

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

		if (newUser) {
			await newUser.save();
			generateTokenAndSetCookie(newUser._id, res);
			res.status(201).json({
				_id: newUser._id,
				fullName: newUser.fullName,
				userName: newUser.userName,
				hashPassword,
				boyProfilePic: newUser.profilePic,
			});
		} else {
			res.status(400).json({ error: 'Invalid user data' });
		}
	} catch (error) {
		console.log('Error with signup controller', error.message);
		res.status(500).json({ error: 'Internal Server Error' });
	}
	// res.send('signupUser');
	// console.log('signupUser');
};

export const login = async (req, res) => {
	try {
		const { userName, password } = req.body;
		const user = await User.findOne({ userName });
		const isPasswordCorrect = await bcrypt.compare(
			password,
			user?.password || ''
		);

		generateTokenAndSetCookie(user._id, res);
		if (!user || !isPasswordCorrect) {
			return res.status(400).json({ error: 'Invalid userName or password' });
		}

		res.status(201).json({});
	} catch (error) {
		console.log('Error with signup controller', error.message);
		res.status(500).json({ error: 'Internal Server Error' });
	}
};

export const logOut = (req, res) => {
	try {
		res.cookie('jwt', '', { maxAge: 0 });
		res.status(200).json({ message: 'Logged out successfully' });
	} catch (error) {
		console.log('Error with signup controller', error.message);
		res.status(500).json({ error: 'Internal Server Error' });
	}
};
