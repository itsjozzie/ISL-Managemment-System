import db from '../config/db.js';

// Get all departments
export const getDepartments = (req, res) => {
  db.query('SELECT department_id, department_name FROM departments', (err, results) => {
    if (err) {
      console.error('Error fetching departments:', err);
      return res.status(500).json({ message: 'Error fetching departments', error: err });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'No departments found' });
    }
    res.status(200).json(results);
  });
};

// Example: Add a department (you can extend this for POST requests)
export const addDepartment = (req, res) => {
  const { department_name } = req.body;

  db.query(
    'INSERT INTO departments (department_name) VALUES (?)',
    [department_name],
    (err, results) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ message: 'Database error', error: err });
      }
      res.status(201).json({ message: 'Department created successfully' });
    }
  );
};

// Example: Get a department by ID
export const getDepartmentById = (req, res) => {
  const { id } = req.params;

  db.query('SELECT * FROM departments WHERE department_id = ?', [id], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ message: 'Database error', error: err });
    }
    if (results.length === 0) {
      return res.status(404).json({ message: 'Department not found' });
    }
    res.status(200).json(results[0]);
  });
};

// Example: Update a department by ID
export const updateDepartment = (req, res) => {
  const { id } = req.params;
  const { department_name } = req.body;

  db.query(
    'UPDATE departments SET department_name = ? WHERE department_id = ?',
    [department_name, id],
    (err, results) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ message: 'Database error', error: err });
      }
      if (results.affectedRows === 0) {
        return res.status(404).json({ message: 'Department not found' });
      }
      res.status(200).json({ message: 'Department updated successfully' });
    }
  );
};
