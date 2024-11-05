const express = require('express');

const server = express();

const PORT
server.get('/', (req, res) => {
	res.send('Hello you in Chat.I0');
});
server.listen(5000, () => console.log('The server is running on port 5000'));
