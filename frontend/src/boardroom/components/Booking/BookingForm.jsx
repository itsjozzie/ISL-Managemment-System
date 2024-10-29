import React, { useState } from 'react';
import "./BookingForm.scss"
const BookingForm = () => {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    boardroom: '',
    purpose: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle booking form submission
    const response = await fetch('/api/book-room', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    if (result.success) {
      alert('Booking created successfully!');
    }
  };

  return (
    <div className="booking-form">
      <h2>Create New Booking</h2>
      <form onSubmit={handleSubmit}>
        <label>Date:
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </label>
        <label>Time:
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        </label>
        <label>Boardroom:
          <select name="boardroom" value={formData.boardroom} onChange={handleChange} required>
            <option value="">Select Boardroom</option>
            <option value="Room A">Room A</option>
            <option value="Room B">Room B</option>
          </select>
        </label>
        <label>Purpose:
          <textarea name="purpose" value={formData.purpose} onChange={handleChange} required></textarea>
        </label>
        <button type="submit">Submit Booking</button>
      </form>
    </div>
  );
};

export default BookingForm;
