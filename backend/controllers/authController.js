import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import db from '../config/db.js';

// Register a new user
export const register = (req, res) => {
  const { name, email, password, confirmPassword, role } = req.body;

  // Validate the provided role
  const validRoles = ['finance', 'hr', 'project', 'sales', 'operation', 'technical', 'admin'];
  if (!validRoles.includes(role)) {
    return res.status(400).json({ message: 'Invalid role' });
  }

  // Check if passwords match
  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  // Hash the password
  const hashedPassword = bcrypt.hashSync(password, 8);

  // Check if email already exists in the database
  db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ message: 'Database error' });
    }

    if (results.length > 0) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Insert the new user into the database
    db.query(
      'INSERT INTO users (name, email, password, role) VALUES (?, ?, ?, ?)',
      [name, email, hashedPassword, role],
      (err, result) => {
        if (err) {
          console.error('Database error:', err);
          return res.status(500).json({ message: 'Database error during user insertion' });
        }
        return res.status(201).json({ message: 'User registered successfully' });
      }
    );
  });
};

// Login a user
export const login = (req, res) => {
  const { email, password } = req.body;

  // Check if the user exists in the database
  db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ message: 'Database error' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'Invalid email address' });
    }

    const user = results[0];

    // Validate the password
    const isPasswordValid = bcrypt.compareSync(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: 'Invalid password' });
    }

    // Generate a JWT token
    const token = jwt.sign({ id: user.id, role: user.role }, process.env.JWT_SECRET || 'your_jwt_secret', {
      expiresIn: '1h'
    });

    return res.json({
      message: 'Login successful',
      token,
      role: user.role // Include role to identify user permissions
    });
  });
};

// Check if the email exists
export const checkEmail = (req, res) => {
  const { email } = req.body;

  // Query the database to check for the email
  db.query('SELECT * FROM users WHERE email = ?', [email], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ message: 'Database error' });
    }

    if (results.length === 0) {
      return res.status(404).json({ message: 'Invalid email address' });
    }

    res.status(200).json({ message: 'Email is valid' });
  });
};
