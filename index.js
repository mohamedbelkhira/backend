
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const tradeRoutes = require('./routes/tradeRoutes');

const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api', tradeRoutes);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
