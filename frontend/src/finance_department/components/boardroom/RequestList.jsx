import React, { useEffect, useState } from 'react';

const RequestList = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Fetch requests from the backend
  }, []);

  return (
    <div>
      <h2>Request List</h2>
      <ul>
        {requests.map((request) => (
          <li key={request.id}>
            User ID: {request.userId} | Start: {request.startTime} | End: {request.endTime}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RequestList;
