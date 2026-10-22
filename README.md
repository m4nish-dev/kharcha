# Kharcha — Know Your Kharcha

A personal finance companion for everyday people, especially Indian users. Track spending, manage daily budgets, monitor bills, build savings goals, and get AI-powered financial insights.

---

## Tech Stack

| Layer    | Technology                               |
| -------- | ---------------------------------------- |
| Frontend | React.js, Vite, React Router DOM, CSS    |
| Backend  | Node.js, Express.js (ES modules)         |
| Database | MongoDB, Mongoose                        |
| AI       | Groq API (server-side only)              |
| Icons    | Lucide React                             |
| Charts   | Recharts                                 |
| Motion   | Motion for React                         |

---

## Project Structure

```
Kharcha/
├── client/                     # React + Vite frontend
│   ├── public/                 # Static assets (favicon, images)
│   ├── src/
│   │   ├── components/         # Reusable UI, layout & chart components
│   │   │   ├── charts/
│   │   │   ├── layout/
│   │   │   └── ui/
│   │   ├── constants/          # App constants & localization
│   │   ├── pages/              # Routed page components
│   │   ├── services/           # API client and backend services
│   │   ├── utils/              # Helper utilities
│   │   ├── App.jsx             # React Router DOM configuration
│   │   ├── index.css           # Global design tokens and reset
│   │   └── main.jsx            # React 19 application entry point
│   ├── index.html              # Vite HTML entry point
│   ├── package.json            # Client scripts & dependencies
│   ├── vite.config.js          # Vite configuration, proxy & path aliases
│   ├── .env.example            # Client environment template
│   └── .gitignore
├── server/                     # Express.js API
│   ├── src/
│   │   ├── config/             # App configuration & DB connection
│   │   ├── controllers/        # Route controllers
│   │   ├── middleware/         # Express middleware (error, notFound)
│   │   ├── models/             # Mongoose models
│   │   ├── routes/             # API routes
│   │   ├── services/           # Groq AI & business services
│   │   ├── utils/              # AppError & async wrappers
│   │   ├── app.js              # Express app initialization & middleware
│   │   └── server.js           # Server startup & port listener
│   ├── package.json            # Server scripts & dependencies
│   ├── .env.example            # Server environment template
│   └── .gitignore
├── .gitignore
└── README.md
```

---

## Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **npm** ≥ 9
- **MongoDB** (optional for initial frontend/backend development)
- **Groq API Key** (optional for initial development)

### 1. Set up environment variables

```bash
# Server
cp server/.env.example server/.env
# Edit server/.env with your MongoDB URI, Groq API key, etc. if available

# Client
cp client/.env.example client/.env
# Default connects to http://localhost:5001/api (or uses Vite /api proxy)
```

### 2. Install dependencies

```bash
# Install server dependencies
cd server && npm install

# Install client dependencies
cd ../client && npm install
```

### 3. Run the application

Open **two terminal windows**:

```bash
# Terminal 1 — Express API server (port 5001)
cd server
npm run dev

# Terminal 2 — React + Vite frontend (port 5173)
cd client
npm run dev
```

| Service  | URL                              |
| -------- | -------------------------------- |
| Frontend | http://localhost:5173            |
| API      | http://localhost:5001/api        |
| Health   | http://localhost:5001/api/health |

> **Why port 5001?**: On macOS Monterey, Ventura, Sonoma, and Sequoia, Apple's **AirPlay Receiver (`ControlCenter`)** listens on port 5000 by default. Binding to port 5001 avoids system port hijacking and CORS preflight blocks.

---

## Scripts

### Client (`client/`)

| Command           | Description                           |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start Vite development server (5173)  |
| `npm run build`   | Build production bundle to `dist/`    |
| `npm run preview` | Locally preview production build      |

### Server (`server/`)

| Command           | Description                           |
| ----------------- | ------------------------------------- |
| `npm run dev`     | Start server with file watching       |
| `npm start`       | Start production server               |

---

## Verification

- **Frontend**: Accessible at `http://localhost:5173`
- **Backend Health Check**: `GET http://localhost:5001/api/health` returns `{ success: true, message: "Kharcha API is running", ... }`

---

## License

Private — All rights reserved.
