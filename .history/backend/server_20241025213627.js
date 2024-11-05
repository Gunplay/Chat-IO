//const express = require('express');
import express from 'express';
import dotenv from 'dotenv';
const server = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

server.get('/', (req, res) => {
	res.send('Hello you in Chat.I0');
});
server.listen(PORT, () => console.log(`The server is running on port${PORT}`));
