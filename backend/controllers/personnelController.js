import db from '../config/db.js';

export const addPersonnel = (req, res) => {
  const { name, email, position, phone, hire_date, status } = req.body;
  const query = 'INSERT INTO personnel (name, email, position, phone, hire_date, status) VALUES (?, ?, ?, ?, ?, ?)';
  db.query(query, [name, email, position, phone, hire_date, status], (err, results) => {
    if (err) return res.status(500).json({ message: 'Error adding personnel' });
    res.status(201).json({ message: 'Personnel added successfully' });
  });
};

export const getAllPersonnel = (req, res) => {
  db.query('SELECT * FROM personnel', (err, results) => {
    if (err) return res.status(500).json({ message: 'Error fetching personnel' });
    res.status(200).json(results);
  });
};

export const getPersonnelById = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM personnel WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ message: 'Error fetching personnel' });
    if (results.length === 0) return res.status(404).json({ message: 'Personnel not found' });
    res.status(200).json(results[0]);
  });
};

export const updatePersonnel = (req, res) => {
  const { id } = req.params;
  const { name, email, position, phone, hire_date, status } = req.body;
  const query = 'UPDATE personnel SET name = ?, email = ?, position = ?, phone = ?, hire_date = ?, status = ? WHERE id = ?';
  db.query(query, [name, email, position, phone, hire_date, status, id], (err) => {
    if (err) return res.status(500).json({ message: 'Error updating personnel' });
    res.status(200).json({ message: 'Personnel updated successfully' });
  });
};

export const deletePersonnel = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM personnel WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json({ message: 'Error deleting personnel' });
    res.status(200).json({ message: 'Personnel deleted successfully' });
  });
};
