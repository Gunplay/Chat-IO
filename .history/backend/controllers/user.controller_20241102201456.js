import User from '../models/user.model.js';

export const getUsersForSideBar = async (req, res) => {
	try {
		const loggedUsers = await User.find({});

		res.status(200).json(loggedUsers);
	} catch (error) {
		console.error('Error in getUsersForSideBar: ', error.message);
		res.status(500).json({ error: 'Internal server error' });
	}
};
