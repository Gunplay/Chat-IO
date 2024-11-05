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

		// this  will run in parallel
		await Promise.all([conversation.save(), newMessage.save()]);
	} catch (error) {
		console.log('Error in sendMessage controller', error.message);
		res.status(500).json({ error: 'Internal server error' });
	}
};

export const getMessages = async (req, res) => {
	try {
		const { id: userToChatId } = req.params;
		const senderId = req.user._id;

		const conversation = await Conversation.findOne({
			participants: { $all: [senderId, userToChatId] },
		}).populate('messages');

		if (!conversation) return res.status(200).json([]);
	} catch (error) {
		console.log('Error in getMessages controller', error.message);
		res.status(500).json({ error: 'Internal server error' });
	}
};
