const mongoose = require('mongoose');
const mongoURI = 'mongodb+srv://mohamedbelkhira09:tU6WWtBwcXiHagkH@cluster0.fm4hkvb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log('MongoDB connected');
    } catch (err) {
        console.error('MongoDB connection failed:', err);
        process.exit(1); // Exit process with failure
    }
};

module.exports = connectDB;
