import 'dotenv/config';
import app from './app.js';
import config from './config/index.js';
import connectDB from './config/db.js';

/**
 * Start the Kharcha Express API server.
 */
const start = async () => {
  // Connect to MongoDB (skips gracefully if MONGO_URI is unset)
  await connectDB();

  const server = app.listen(config.port, () => {
    console.log(`\n🚀  Kharcha API running on http://localhost:${config.port}`);
    console.log(`   Environment: ${config.env}\n`);
  });

  server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
      console.error(
        `\n⚠️  Port ${config.port} is already in use.`
      );
      console.error(
        `   On macOS, port 5000 is often reserved by AirPlay Receiver (System Settings > General > AirDrop & AirPlay).`
      );
      console.error(
        `   You can set PORT=5001 (or another free port) in server/.env.\n`
      );
    } else {
      console.error('\n❌ Server error:', err);
    }
  });

  return server;
};

// Start server if executed directly
start();

export { app, start };
export default app;
