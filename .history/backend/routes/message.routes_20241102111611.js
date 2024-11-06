import express from 'express';
import { sendMessage } from '../controllers/message.controller.js';
import protectRoute from '../middleware/protectRoute.js';
const router = express.Router();

// server.use('/api/messages', sendMessage);

router.get('/:id', protectRoute, sendMessage);
router.post('/send/:id', protectRoute, sendMessage);

export default router;