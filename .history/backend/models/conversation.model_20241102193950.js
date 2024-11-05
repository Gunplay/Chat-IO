import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema(
	{
		participants: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: 'User',
			},
		],
		senderName: {
			type: String,
			required: false,
		},
		receiverName: {
			type: String,
			required: false,
		},
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
