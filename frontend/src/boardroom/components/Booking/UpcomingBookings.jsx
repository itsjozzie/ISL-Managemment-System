import React, { useEffect, useState } from 'react';

const UpcomingBookings = () => {
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    // Fetch upcoming bookings from the backend
  }, []);

  return (
    <div>
      <h2>Upcoming Bookings</h2>
      <ul>
        {upcoming.map((booking) => (
          <li key={booking.bookingId}>
            Booking ID: {booking.bookingId} | User ID: {booking.userId} | Start: {booking.startTime} | End: {booking.endTime}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UpcomingBookings;
