import React, { useState, useEffect } from 'react';
import './AccountsPayable.scss';

const AccountsPayable = () => {
  const [payables, setPayables] = useState([]);

  useEffect(() => {
    // Fetch payables data from API
    // Placeholder for API call
    setPayables([
      { id: 1, vendor: 'Vendor A', amount: 500, dueDate: '2024-08-30' },
      { id: 2, vendor: 'Vendor B', amount: 300, dueDate: '2024-09-05' },
    ]);
  }, []);

  return (
    <div className="accounts-payable">
      <h1>Accounts Payable</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Vendor</th>
            <th>Amount</th>
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {payables.map(payable => (
            <tr key={payable.id}>
              <td>{payable.id}</td>
              <td>{payable.vendor}</td>
              <td>${payable.amount}</td>
              <td>{payable.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AccountsPayable;
