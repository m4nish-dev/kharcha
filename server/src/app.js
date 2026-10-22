import express from 'express';
import cors from 'cors';
import config from './config/index.js';
import routes from './routes/index.js';
import notFound from './middleware/notFound.js';
import errorHandler from './middleware/errorHandler.js';

// ── Initialise Express ──────────────────────────────────────────────
const app = express();

// ── CORS Configuration ──────────────────────────────────────────────
// Allows local frontend development (Vite on 5173, etc.) and configured CLIENT_URL
const allowedOrigins = [
  config.clientUrl,
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:3000',
  'http://127.0.0.1:3000',
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. mobile apps, curl, server-to-server)
      if (!origin) return callback(null, true);

      // Allow any localhost / 127.0.0.1 origin or explicit whitelist
      const isLocalhost = /^http:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin);
      if (isLocalhost || allowedOrigins.includes(origin)) {
        return callback(null, true);
      }

      return callback(new Error(`Origin ${origin} not allowed by CORS`));
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  })
);

// ── Body parsing middleware ─────────────────────────────────────────
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

// ── API routes ──────────────────────────────────────────────────────
app.use('/api', routes);

// ── Error handling ──────────────────────────────────────────────────
app.use(notFound);
app.use(errorHandler);

export default app;
