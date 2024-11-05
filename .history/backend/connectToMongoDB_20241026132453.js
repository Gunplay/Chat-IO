import mongoose from 'mongoose';

const connectToMongoDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_DB_);
	} catch (error) {}
};
