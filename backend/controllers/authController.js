import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../config/db.js';

// Register a new user with role
export const register = (req, res) => {
  const { name, email, password, confirmPassword, role } = req.body;

  // Validate role
  const validRoles = ['finance', 'hr', 'project', 'sales', 'operation', 'technical'];
  if (!validRoles.includes(role)) {
    return res.status(400).json({ message: 'Invalid role' });
  }

  // Check password confirmation
  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  // Hash the password
  const hashedPassword = bcrypt.hashSync(password, 8);

  // Insert user into the database
  db.query('INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)', 
  [name, email, hashedPassword, role], 
  (err, result) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ message: 'Database error', error: err });
    }
    res.status(201).json({ message: 'User registered successfully' });
  });
};

// Login user and return JWT with role
export const login = (req, res) => {
  const { email, password } = req.body;

  // Find user by email
  db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ message: 'Database error', error: err });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Invalid email address' });
    }
    const user = results[0];
    
    // Check if password is correct
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Generate JWT token
    const token = jwt.sign({ id: user.id, role: user.role }, 'your_jwt_secret', { expiresIn: '1h' });

    res.json({ message: 'Login successful', token, role: user.role });
  });
};

// Check if the email exists
export const checkEmail = (req, res) => {
  const { email } = req.body;

  db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ message: 'Database error', error: err });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Invalid email address' });
    }
    res.status(200).json({ message: 'Email is valid' });
  });
};
