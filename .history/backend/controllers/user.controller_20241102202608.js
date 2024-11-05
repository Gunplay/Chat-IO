import User from '../models/user.model.js';

export const getUsersForSideBar = async (req, res) => {
	try {
		const loggedInUserId = req.user._id;
		const filterUsers = await User.find({ _id: { $ne: loggedInUserId } });

		res.status(200).json(
			loggedUsers.map(user => {
				user.userName;
			})
		);
	} catch (error) {
		console.error('Error in getUsersForSideBar: ', error.message);
		res.status(500).json({ error: 'Internal server error' });
	}
};