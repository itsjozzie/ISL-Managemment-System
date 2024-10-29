import React, { useState, useEffect } from 'react';

const ViewRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Fetch user's booking requests
    const fetchRequests = async () => {
      const response = await fetch('/api/view-requests');
      const data = await response.json();
      setRequests(data);
    };
    fetchRequests();
  }, []);

  return (
    <div className="view-requests">
      <h2>Your Booking Requests</h2>
      {requests.length === 0 ? (
        <p>No requests found.</p>
      ) : (
        <ul>
          {requests.map((request, index) => (
            <li key={index}>
              {request.date} - {request.boardroom} for {request.purpose} - Status: {request.status}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ViewRequests;
