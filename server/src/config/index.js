/**
 * Centralized application configuration.
 * All environment variables are read here and exported as a single object.
 * Defaults are provided for local development so the server can start
 * without a .env file when the database is not needed.
 */

const config = {
  env: process.env.NODE_ENV || 'development',
  // Port 5001 by default on macOS to avoid conflict with AirPlay Receiver (ControlCenter on port 5000)
  port: parseInt(process.env.PORT, 10) || 5001,

  // MongoDB
  mongoUri: process.env.MONGO_URI || '',

  // Groq AI
  groqApiKey: process.env.GROQ_API_KEY || '',
  groqModel: process.env.GROQ_MODEL || 'llama-3.3-70b-versatile',

  // JWT (future auth)
  jwtSecret: process.env.JWT_SECRET || '',
  jwtExpiresIn: process.env.JWT_EXPIRES_IN || '7d',

  // Client origin for CORS (Vite default is 5173)
  clientUrl: process.env.CLIENT_URL || 'http://localhost:5173',
};

export default config;
