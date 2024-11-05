import mongoose from 'mongoose';

const connectToMongoDB = async () => {
	try {
		await mongoose.connect();
	} catch (error) {}
};
