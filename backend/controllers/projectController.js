import db from '../config/db.js';

export const addProject = (req, res) => {
  const { name, description, start_date, end_date, status, client_id } = req.body;
  db.query(
    'INSERT INTO projects (name, description, start_date, end_date, status, client_id, created_at, updated_at) VALUES (?, ?, ?, ?, ?, ?, NOW(), NOW())',
    [name, description, start_date, end_date, status, client_id],
    (err, result) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ message: 'Database error', error: err });
      }
      res.status(201).json({ message: 'Project added successfully' });
    }
  );
};

export const getAllProjects = (req, res) => {
  db.query('SELECT * FROM projects', (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ message: 'Database error', error: err });
    }
    res.status(200).json(results);
  });
};

export const getProjectById = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM projects WHERE id = ?', [id], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ message: 'Database error', error: err });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Project not found' });
    }
    res.status(200).json(results[0]);
  });
};

export const updateProject = (req, res) => {
  const { id } = req.params;
  const { name, description, start_date, end_date, status, client_id } = req.body;
  db.query(
    'UPDATE projects SET name = ?, description = ?, start_date = ?, end_date = ?, status = ?, client_id = ?, updated_at = NOW() WHERE id = ?',
    [name, description, start_date, end_date, status, client_id, id],
    (err, result) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ message: 'Database error', error: err });
      }
      if (result.affectedRows === 0) {
        return res.status(404).json({ message: 'Project not found' });
      }
      res.status(200).json({ message: 'Project updated successfully' });
    }
  );
};
