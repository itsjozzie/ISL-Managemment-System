import React, { useState, useEffect } from 'react';
import "./BookingHistory.scss";
const BookingHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Fetch booking history from API or backend
    const fetchHistory = async () => {
      const response = await fetch('/api/booking-history');
      const data = await response.json();
      setHistory(data);
    };
    fetchHistory();
  }, []);

  return (
    <div className="booking-history">
      <h2>Booking History</h2>
      {history.length === 0 ? (
        <p>No past bookings available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Boardroom</th>
              <th>User</th>
              <th>Purpose</th>
            </tr>
          </thead>
          <tbody>
            {history.map((booking, index) => (
              <tr key={index}>
                <td>{booking.date}</td>
                <td>{booking.time}</td>
                <td>{booking.boardroom}</td>
                <td>{booking.user}</td>
                <td>{booking.purpose}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default BookingHistory;
