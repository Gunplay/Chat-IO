import mongoose from 'mongoose';

const messageSchema = mongoose.Schema(
	{
		senderId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: false,
		},
		receiverId: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: false,
		},
		message: {
			type: String,
			required: true,
		},
		//createAt, updateAt
	},
	{ timestamps: true }
);

const Message = mongoose.model('Message', messageSchema);

export default Message;
