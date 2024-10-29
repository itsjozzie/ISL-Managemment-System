import React, { useState, useEffect } from 'react';
import './UpcomingBookings.scss';
const UpcomingBookings = () => {
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    // Fetch upcoming bookings
    const fetchUpcomingBookings = async () => {
      const response = await fetch('/api/upcoming-bookings');
      const data = await response.json();
      setUpcoming(data);
    };
    fetchUpcomingBookings();
  }, []);

  return (
    <div className="upcoming-bookings">
      <h2>Upcoming Bookings</h2>
      {upcoming.length === 0 ? (
        <p>No upcoming bookings.</p>
      ) : (
        <ul>
          {upcoming.map((booking, index) => (
            <li key={index}>
              <strong>{booking.date}</strong> at {booking.time} in {booking.boardroom} for {booking.purpose}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default UpcomingBookings;
