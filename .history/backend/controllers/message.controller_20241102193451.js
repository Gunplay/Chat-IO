import Conversation from '../models/conversation.model.js';
import Message from '../models/message.model.js';
import User from '../models/user.model.js';

export const sendMessage = async (req, res) => {
	try {
		console.log('sendMessage', req.body);
		const { message } = req.body;
		const { id: receiverId } = req.params;
		const senderId = req.user._id; // The user who is in our database
		let conversation = await Conversation.findOne({
			participants: { $all: [senderId, receiverId] },
		});

		const sender = await User.findById(senderId);
		const receiver = await User.findById(receiverId);

		if (!sender || !receiver) {
			return res.status(404).json({ error: 'User not found' });
		}
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

		const messages = conversation.messages;

		res.status(200).json(messages);
	} catch (error) {
		console.log('Error in getMessages controller', error.message);
		res.status(500).json({ error: 'Internal server error' });
	}
};
