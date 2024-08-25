const express = require('express');
const db = require('./config/connection');
const routes = require('./api');

// Initialize the Express application
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes from the routes directory
app.use(routes);

// Connect to the MongoDB database and then start the Express server
db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
  });
});

db.on('error', (err) => {
  console.error('MongoDB connection error:', err);
});
