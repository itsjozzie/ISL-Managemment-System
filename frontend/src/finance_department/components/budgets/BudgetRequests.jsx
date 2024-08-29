import React, { useState, useEffect } from 'react';
import './BudgetRequests.scss';

const BudgetRequests = () => {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    // Fetch budget requests data from API
    // Placeholder for API call
    setRequests([
      { id: 1, department: 'Department A', amount: 5000, status: 'Approved' },
      { id: 2, department: 'Department B', amount: 3000, status: 'Pending' },
    ]);
  }, []);

  return (
    <div className="budget-requests">
      <h1>Budget Requests</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Department</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {requests.map(request => (
            <tr key={request.id}>
              <td>{request.id}</td>
              <td>{request.department}</td>
              <td>${request.amount}</td>
              <td>{request.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BudgetRequests;
