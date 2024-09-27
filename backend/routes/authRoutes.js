import { Router } from 'express';
import { register, login, checkEmail } from '../controllers/authController.js';

const router = Router();

// Register a new user
router.post('/register', register);

// Login user
router.post('/login', login);

// Check email existence
router.post('/check-email', checkEmail);

export default router;
