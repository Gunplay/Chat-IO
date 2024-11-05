//const express = require('express');
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import express from 'express';
import connectToMongoDB from './connectToMongoDB.js';
import { sendMessage } from './controllers/message.controller.js';
import authRoutes from './routes/auth.routes.js';

const server = express();

dotenv.config();

const PORT = process.env.PORT || 5000;

server.use(express.json()); // to parse the incoming requests with JSON payloads (req.body)
server.use(cookieParser());

server.use('/api/auth', authRoutes);
server.use('/api/messages', sendMessage);

server.listen(PORT, () => {
	connectToMongoDB();
	console.log(`The server is running on port: ${PORT}`);
});
