const express = require('express');

const server = express();

const PORT = process.env.PORT || 5000;

server.get('/', (req, res) => {
	res.send('Hello you in Chat.I0');
});
server.listen(PORT, () => console.log('The server is running on port 5000'));
