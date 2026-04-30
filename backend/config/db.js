import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		const conn = await mongoose.connect(process.env.MONGO_URI);

		console.log(`MongoDB connected: ${conn.connection.host}`.cyan.bold);
	} catch (error) {
		console.error(`Error: ${error.message}`.red.inverse);
		process.exit(1);
	}
};

export default connectDB;
