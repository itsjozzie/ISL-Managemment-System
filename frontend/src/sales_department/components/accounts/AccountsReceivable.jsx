import React, { useState, useEffect } from 'react';
import './AccountsReceivable.scss';

const AccountsReceivable = () => {
  const [receivables, setReceivables] = useState([]);

  useEffect(() => {
    // Fetch receivables data from API
    // Placeholder for API call
    setReceivables([
      { id: 1, client: 'Client X', amount: 1200, dueDate: '2024-09-10' },
      { id: 2, client: 'Client Y', amount: 800, dueDate: '2024-09-20' },
    ]);
  }, []);

  return (
    <div className="accounts-receivable">
      <h1>Accounts Receivable</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Client</th>
            <th>Amount</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {receivables.map(receivable => (
            <tr key={receivable.id}>
              <td>{receivable.id}</td>
              <td>{receivable.client}</td>
              <td>${receivable.amount}</td>
              <td>{receivable.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountsReceivable;
