//const express = require('express');
import dotenv from 'dotenv';
import express from 'express';
import authRoutes from './routes/auth.routes.js';
const server = express();

//dotenv.config();

const PORT = process.env.PORT || 5000;

server.get('/', (req, res) => {
	res.send('Hello you in Chat.I0');
});

// Use middleware
server.use('/api/auth', authRoutes);

// server.get('/api/auth/signup', (req, res) => {
// 	console.log('signup route');
// });

// server.get('/api/auth/login', (req, res) => {
// 	console.log('signup login');
// });

// server.get('/api/auth/logout', (req, res) => {
// 	console.log('signup logout');
// });

server.listen(PORT, () =>
	console.log(`The server is running on port: ${PORT}`)
);
