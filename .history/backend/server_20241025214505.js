//const express = require('express');
import dotenv from 'dotenv';
import express from 'express';

const server = express();

dotenv.config();
const PORT = process.env.PORT || 5000;

server.get('/', (req, res) => {
	res.send('Hello you in Chat.I0');
});

server.get('/api/auth/signup', (req, res) => {
	console.log('signup route');
});

server.listen(PORT, () =>
	console.log(`The server is running on port: ${PORT}`)
);
