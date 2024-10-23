import db from '../config/db.js';

// Add a request
export const addRequest = (req, res) => {
  const { user_id, department_id, request_details } = req.body;
  const query = `INSERT INTO Requests (user_id, department_id, request_details) VALUES (?, ?, ?)`;

  db.query(query, [user_id, department_id, request_details], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Request created', request_id: results.insertId });
  });
};

// Get all requests
export const getRequests = (req, res) => {
  const query = `SELECT * FROM Requests`;

  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(results);
  });
};
