import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema(
	{
		senderName: {
			type: String,
			required: true,
		},
		receiverName: {
			type: String,
			required: true,
		},
		participants: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
			},
		],
		messages: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'Message',
				default: [],
			},
		],
	},
	{ timestamps: true }
);

const Conversation = mongoose.model('Conversation', conversationSchema);

export default Conversation;