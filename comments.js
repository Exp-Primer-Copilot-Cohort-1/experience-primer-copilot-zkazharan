// Create web server
// 1. Create web server
// 2. Create a route and return a response
// 3. Start the server

// Import express module
const express = require('express');
const app = express();

// Create a route and return a response
app.get('/', (req, res) => {
    res.send('Hello world');
});

// Start the server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});