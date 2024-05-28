// app.js
const express = require('express');
const connectDB = require('./config/db');
// const cookieParser = require('cookie-parser');
// const authRoutes = require('./routes/authRoutes');

const app = express();

// Connect to database
connectDB();

// Middleware
// app.use(express.json());
// app.use(cookieParser());

// Routes
// app.use('/api/auth', authRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
