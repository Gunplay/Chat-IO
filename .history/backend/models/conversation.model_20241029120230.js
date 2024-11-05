import mongoose from 'mongoose';

const conversationSchema = new mongoose.Schema(
	{
		participants: [
			{
				type: mongoose.Schema.Types.ObjectId,
				ref: true,
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