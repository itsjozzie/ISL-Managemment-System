import db from '../config/db.js';

// Get all departments
export const getDepartments = (req, res) => {
  const query = `SELECT * FROM Departments`;

  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(results);
  });
};
