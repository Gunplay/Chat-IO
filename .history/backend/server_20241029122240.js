//const express = require('express');
import dotenv from 'dotenv';
import express from 'express';
import connectToMongoDB from './connectToMongoDB.js';
import authRoutes from './routes/auth.routes.js';
import { sendMessage } from './controllers/message.controller.js';

const server = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

server.use(express.json()); // to parse the incoming requests with JSON payloads (req.body)
server.use('/api/auth', authRoutes);
server.use('/api/messages', sendMessage);
// server.get('/', (req, res) => {
// 	res.send('Hello you in Chat.I0');
// });

// Use middleware

server.listen(PORT, () => {
	connectToMongoDB();
	console.log(`The server is running on port: ${PORT}`);
});
