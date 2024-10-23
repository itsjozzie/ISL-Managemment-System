import React, { useEffect, useState } from 'react';

const BookingHistory = () => {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    // Fetch booking history from the backend
  }, []);

  return (
    <div>
      <h2>Booking History</h2>
      <ul>
        {history.map((booking) => (
          <li key={booking.bookingId}>
            Booking ID: {booking.bookingId} | User ID: {booking.userId} | Start: {booking.startTime} | End: {booking.endTime}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookingHistory;
