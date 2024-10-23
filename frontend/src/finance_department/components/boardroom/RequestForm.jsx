import React, { useState } from 'react';

const RequestForm = () => {
  const [requestData, setRequestData] = useState({
    userId: '',
    startTime: '',
    endTime: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRequestData({ ...requestData, [name]: value });
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
        value={requestData.userId}
        onChange={handleChange}
        placeholder="User ID"
      />
      <input
        type="datetime-local"
        name="startTime"
        value={requestData.startTime}
        onChange={handleChange}
      />
      <input
        type="datetime-local"
        name="endTime"
        value={requestData.endTime}
        onChange={handleChange}
      />
      <button type="submit">Submit Request</button>
    </form>
  );
};

export default RequestForm;
