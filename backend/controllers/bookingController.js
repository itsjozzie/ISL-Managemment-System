import db from '../config/db.js';

// Add a booking
export const addBooking = (req, res) => {
  const { user_id, department_id, boardroom_id, start_time, end_time } = req.body;
  const query = `INSERT INTO Bookings (user_id, department_id, boardroom_id, start_time, end_time) VALUES (?, ?, ?, ?, ?)`;
  
  db.query(query, [user_id, department_id, boardroom_id, start_time, end_time], (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(201).json({ message: 'Booking created', booking_id: results.insertId });
  });
};

// Get all bookings
export const getBookings = (req, res) => {
  const query = `SELECT * FROM Bookings`;

  db.query(query, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.status(200).json(results);
  });
};
