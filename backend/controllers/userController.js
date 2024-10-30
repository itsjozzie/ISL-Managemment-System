import db from '../config/db.js';

// Get all users
export const getUsers = (req, res) => {
  db.query('SELECT id, name FROM users', (err, results) => {
    if (err) {
      console.error('Error fetching users:', err);
      return res.status(500).json({ message: 'Error fetching users', error: err });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'No users found' });
    }
    res.status(200).json(results);
  });
};

// Example: Add a user (you can extend this for POST requests)
export const addUser = (req, res) => {
  const { name } = req.body;

  db.query(
    'INSERT INTO users (name) VALUES (?)',
    [name],
    (err, results) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ message: 'Database error', error: err });
      }
      res.status(201).json({ message: 'User created successfully' });
    }
  );
};

// Example: Get a user by ID
export const getUserById = (req, res) => {
  const { id } = req.params;

  db.query('SELECT * FROM users WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ message: 'Database error', error: err });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.status(200).json(results[0]);
  });
};

// Example: Update a user by ID
export const updateUser = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  db.query(
    'UPDATE users SET name = ? WHERE id = ?',
    [name, id],
    (err, results) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ message: 'Database error', error: err });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({ message: 'User not found' });
      }
      res.status(200).json({ message: 'User updated successfully' });
    }
  );
};
