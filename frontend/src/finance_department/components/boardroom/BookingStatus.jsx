import React, { useState, useEffect } from 'react';

const BookingStatus = () => {
  const [statuses, setStatuses] = useState([]);

  useEffect(() => {
    // Fetch booking status
    const fetchStatuses = async () => {
      const response = await fetch('/api/booking-status');
      const data = await response.json();
      setStatuses(data);
    };
    fetchStatuses();
  }, []);

  return (
    <div className="booking-status">
      <h2>Booking Status</h2>
      {statuses.length === 0 ? (
        <p>No bookings found.</p>
      ) : (
        <ul>
          {statuses.map((status, index) => (
            <li key={index}>
              {status.date} - {status.boardroom} - Status: {status.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookingStatus;
