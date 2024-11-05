import express from 'express';
import protectRoute from '../middleware/protectRoute';

const router = express.Router();

router.get('/', protectRoute, getUsersForSideBar);

export default router;