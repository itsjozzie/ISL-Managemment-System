import React, { useState } from 'react';

const BookingForm = () => {
  const [bookingData, setBookingData] = useState({
    userId: '',
    startTime: '',
    endTime: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookingData({ ...bookingData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="userId"
        value={bookingData.userId}
        onChange={handleChange}
        placeholder="User ID"
      />
      <input
        type="datetime-local"
        name="startTime"
        value={bookingData.startTime}
        onChange={handleChange}
      />
      <input
        type="datetime-local"
        name="endTime"
        value={bookingData.endTime}
        onChange={handleChange}
      />
      <button type="submit">Book Room</button>
    </form>
  );
};

export default BookingForm;
