import React, { useState } from 'react';
import './AddRequest.scss'
const AddRequest = () => {
  const [request, setRequest] = useState({
    date: '',
    time: '',
    boardroom: '',
    purpose: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRequest((prevRequest) => ({ ...prevRequest, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Submit booking request
    const response = await fetch('/api/add-request', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(request),
    });
    if (response.ok) {
      alert('Request submitted successfully');
    }
  };

  return (
    <div className="add-request">
      <h2>Add Booking Request</h2>
      <form onSubmit={handleSubmit}>
        <label>Date:
          <input type="date" name="date" value={request.date} onChange={handleChange} required />
        </label>
        <label>Time:
          <input type="time" name="time" value={request.time} onChange={handleChange} required />
        </label>
        <label>Boardroom:
          <select name="boardroom" value={request.boardroom} onChange={handleChange} required>
            <option value="">Select Boardroom</option>
            <option value="Room A">Room A</option>
            <option value="Room B">Room B</option>
          </select>
        </label>
        <label>Purpose:
          <textarea name="purpose" value={request.purpose} onChange={handleChange} required></textarea>
        </label>
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default AddRequest;
