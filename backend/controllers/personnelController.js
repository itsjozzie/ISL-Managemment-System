import db from '../config/db.js';


export const addPersonnel = (req, res) => {
  const { name, email, position, phone, hire_date, status } = req.body;
  db.query(
    'INSERT INTO personnel (name, email, position, phone, hire_date, status, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, NOW(), NOW())',
    [name, email, position, phone, hire_date, status],
    (err, result) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ message: 'Database error', error: err });
      }
      res.status(201).json({ message: 'Personnel added successfully' });
    }
  );
};


export const getAllPersonnel = (req, res) => {
  db.query('SELECT * FROM personnel', (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ message: 'Database error', error: err });
    }
    res.status(200).json(results);
  });
};


export const getPersonnelById = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM personnel WHERE id = ?', [id], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Personnel not found' });
    }
    res.json(results[0]);
  });
};
