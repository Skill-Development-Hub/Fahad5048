const mongoose = require('mongoose');

// MongoDB connection function
const connectDB = async () => {
  try {
    // Remove the deprecated options
    const connection = await mongoose.connect('mongodb://localhost:27017/myDatabase');

    console.log(`MongoDB Connected: ${connection.connection.host}`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    process.exit(1); // Exit process if there's an error
  }
};

module.exports = connectDB;
