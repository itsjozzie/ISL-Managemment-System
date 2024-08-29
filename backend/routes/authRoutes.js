import { Router } from 'express';
import { register, login, checkEmail } from '../controllers/authController.js';

const router = Router();

// Register a new user with role
router.post('/register', (req, res) => {
  const { role } = req.body;
  
  // Validate role
  const validRoles = ['finance', 'hr', 'project', 'sales', 'operation', 'technical'];
  if (!validRoles.includes(role)) {
    return res.status(400).json({ message: 'Invalid role' });
  }

  // Call the register function from the controller
  register(req, res);
});

// Login user and return JWT with role
router.post('/login', login);

// Check if the email exists
router.post('/check-email', checkEmail);

export default router;
