const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db/connect');
const notesRoutes = require('./routes/notes');
const loggerMiddleware = require('./middlewares/logger');
const corsMiddleware = require('./middlewares/cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middlewares
app.use(bodyParser.json());
app.use(loggerMiddleware);
app.use(corsMiddleware);

// API Endpoints
app.use('/api/notes', notesRoutes);

// 404 Error Handling
app.use((req, res, next) => {
  res.status(404).json({ error: 'Not Found' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
