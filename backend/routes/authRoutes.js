import { Router } from 'express';
import { register, login, checkEmail } from '../controllers/authController.js';

const router = Router();

router.post('/register', register);
router.post('/login', login);
router.post('/check-email', checkEmail);

export default router;
