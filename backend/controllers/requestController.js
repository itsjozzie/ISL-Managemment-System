import db from '../config/db.js';

export const getRequests = async (req, res) => {
  try {
    const query = `
      SELECT r.request_id, r.request_date, r.start_time, r.end_time, r.purpose, r.status, 
             u.id AS user_id, u.name AS user_name, 
             d.department_id, d.department_name, b.boardroom_name
      FROM requests r
      JOIN users u ON r.user_id = u.id
      JOIN departments d ON r.department_id = d.department_id
      JOIN boardrooms b ON r.boardroom_id = b.boardroom_id
    `;
    const [rows] = await db.query(query);
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching requests', error });
  }
};

// Add a new booking request
export const addRequest = async (req, res) => {
  const { user_id, department_id, boardroom_id, request_date, start_time, end_time, purpose, status = 'pending' } = req.body;

  if (!user_id || !department_id || !boardroom_id || !request_date || !start_time || !end_time || !purpose) {
    return res.status(400).json({ message: 'All fields are required.' });
  }

  try {
    const query = `
      INSERT INTO requests (user_id, department_id, boardroom_id, request_date, start_time, end_time, purpose, status)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `;
    const values = [user_id, department_id, boardroom_id, request_date, start_time, end_time, purpose, status];

    const [result] = await db.query(query, values);
    res.status(201).json({ message: 'Request submitted successfully', requestId: result.insertId });
  } catch (error) {
    res.status(500).json({ message: 'Error submitting request', error });
  }
};