import mongoose from 'mongoose';
import config from './index.js';

/**
 * Connect to MongoDB via Mongoose.
 * Logs success or failure. If no MONGO_URI is configured the server
 * will still start — useful when working on the frontend without a database.
 */
const connectDB = async () => {
  if (!config.mongoUri) {
    console.warn(
      '⚠  MONGO_URI is not set. The server will start without a database connection.'
    );
    return;
  }

  try {
    const conn = await mongoose.connect(config.mongoUri);
    console.log(`✓  MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`✗  MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};

export default connectDB;
