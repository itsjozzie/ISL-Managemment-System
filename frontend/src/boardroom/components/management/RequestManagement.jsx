import React, { useState, useEffect } from 'react';

const RequestManagement = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Fetch booking requests
    const fetchRequests = async () => {
      const response = await fetch('/api/requests');
      const data = await response.json();
      setRequests(data);
    };
    fetchRequests();
  }, []);

  const handleApproveRequest = async (requestId) => {
    await fetch(`/api/requests/${requestId}/approve`, { method: 'POST' });
    setRequests(requests.map(req => req.id === requestId ? { ...req, status: 'Approved' } : req));
  };

  return (
    <div className="request-management">
      <h2>Booking Requests</h2>
      <ul>
        {requests.map((req) => (
          <li key={req.id}>
            {req.date} - {req.boardroom} by {req.user} - Status: {req.status}
            {req.status === 'Pending' && <button onClick={() => handleApproveRequest(req.id)}>Approve</button>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RequestManagement;
