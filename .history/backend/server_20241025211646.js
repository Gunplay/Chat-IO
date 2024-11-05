const express = require('express');

const server = express();

server.get('/');
server.listen(5000, () => console.log('The server is running on port 5000'));
