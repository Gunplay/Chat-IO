import Conversation from '../models/conversation.model.js';
import Message from '../models/message.model.js';

export const sendMessage = async (req, res) => {
	try {
		console.log('sendMessage', req.user);
		const { message } = req.body;
		const { id: receiverId } = req.params;
		const senderId = req.user._id; // The user who is in our database
		let conversation = await Conversation.findOne({
			participants: { $all: [senderId, receiverId] },
		});

		if (!conversation) {
			conversation = await Conversation.create({
				participants: [senderId, receiverId],
			});
		}

		const newMessage = new Message({
			senderId,
			receiverId,
			message,
		});

		if (newMessage) {
			conversation.messages.push(newMessage._id);
		}

		res.status(201).json(newMessage);
		// await conversation.save();
		// await newMessage.save();

		// this is will run parallel
		await Promise.all([conversation.save(), newMessage.save()]);
	} catch (error) {
		console.log('Error in sendMessage controller', error.message);
		res.status(500).json({ error: 'Internal server error' });
	}
};
