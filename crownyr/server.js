const express = require('express');

const server = express();

server.get('/', (req, res) => {
    res.send('Hello from Express');
});

server.listen(5000, () => {
    console.log('Server running on http://localhost:5000')
});