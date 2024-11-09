const express = require('express');
const connectDB = require('./db');  // Import MongoDB connection function

const app = express();
const port = 5000;  // The port your server will listen on

// Middleware to parse JSON data from requests
app.use(express.json());

// Connect to MongoDB
connectDB();

// Example route for testing connection
app.get('/', (req, res) => {
  res.send('Hello from MongoDB Backend!');
});

// Additional routes for your app (e.g., CRUD operations)
app.get('/courses', (req, res) => {
  // Your code to fetch courses from MongoDB
  res.json({ message: 'Here are the available courses!' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
