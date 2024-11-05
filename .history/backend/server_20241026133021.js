//const express = require('express');
import dotenv from 'dotenv';
import express from 'express';
import connectToMongoDB from './connectToMongoDB.js';
import authRoutes from './routes/auth.routes.js';
const server = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

server.get('/', (req, res) => {
	res.send('Hello you in Chat.I0');
});

// Use middleware
server.use('/api/auth', authRoutes);

server.listen(PORT, () => {
	connectToMongoDB();
	console.log(`The server is running on port: ${PORT}`);
});
