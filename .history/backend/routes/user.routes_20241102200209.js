import express from 'express';

const router = express.Router();

router.get('/', getUserForSideBar);

export default router;
