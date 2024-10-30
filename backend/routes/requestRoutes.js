import express from 'express';
import { addRequest, getRequests } from '../controllers/requestController.js';

const router = express.Router();

router.post('/add-request', addRequest);
router.get('/', getRequests);

export default router;
