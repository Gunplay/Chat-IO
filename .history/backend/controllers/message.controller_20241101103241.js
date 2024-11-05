import Conversation from '../models/conversation.model.js';
import Message from '../models/message.model.js';

export const sendMessage = async (req, res) => {
	try {
		if (!req.user || !req.user._id) {
			return res.status(401).json({ error: 'User not authenticated' });
		}

		const { message } = req.body;
		const { id: receiverId } = req.params;
		const senderId = req.user._id;

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

		await newMessage.save();
		conversation.messages.push(newMessage._id);
		await conversation.save();

		res.status(200).json({ message: 'Message sent successfully' });
	} catch (error) {
		console.error('Error in sendMessage controller', error.message);
		res.status(500).json({ error: 'Internal server error' });
	}
};
