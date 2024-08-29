import db from '../config/db.js';

export const addAssignment = (req, res) => {
  const { personnel_id, project_id, assignment_date, status } = req.body;
  const query = 'INSERT INTO assignments (personnel_id, project_id, assignment_date, status) VALUES (?, ?, ?, ?)';
  db.query(query, [personnel_id, project_id, assignment_date, status], (err, results) => {
    if (err) return res.status(500).json({ message: 'Error adding assignment' });
    res.status(201).json({ message: 'Assignment added successfully' });
  });
};

export const getAllAssignments = (req, res) => {
  db.query('SELECT * FROM assignments', (err, results) => {
    if (err) return res.status(500).json({ message: 'Error fetching assignments' });
    res.status(200).json(results);
  });
};

export const getAssignmentById = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM assignments WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ message: 'Error fetching assignment' });
    if (results.length === 0) return res.status(404).json({ message: 'Assignment not found' });
    res.status(200).json(results[0]);
  });
};

export const updateAssignment = (req, res) => {
  const { id } = req.params;
  const { personnel_id, project_id, assignment_date, status } = req.body;
  const query = 'UPDATE assignments SET personnel_id = ?, project_id = ?, assignment_date = ?, status = ? WHERE id = ?';
  db.query(query, [personnel_id, project_id, assignment_date, status, id], (err) => {
    if (err) return res.status(500).json({ message: 'Error updating assignment' });
    res.status(200).json({ message: 'Assignment updated successfully' });
  });
};

export const deleteAssignment = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM assignments WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json({ message: 'Error deleting assignment' });
    res.status(200).json({ message: 'Assignment deleted successfully' });
  });
};

export const getAssignmentsByPersonnel = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM assignments WHERE personnel_id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ message: 'Error fetching assignments' });
    res.status(200).json(results);
  });
};
