import React, { useState, useEffect } from 'react';
import './ExpenseReports.scss';

const ExpenseReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Fetch expense reports data from API
    // Placeholder for API call
    setReports([
      { id: 1, expense: 'Office Supplies', amount: 250, date: '2024-08-01' },
      { id: 2, expense: 'Travel', amount: 800, date: '2024-08-15' },
    ]);
  }, []);

  return (
    <div className="expense-reports">
      <h1>Expense Reports</h1>
      <div className="report-card">
        {reports.map(report => (
          <div key={report.id}>
            <h2>{report.expense}</h2>
            <p>Amount: ${report.amount}</p>
            <p>Date: {report.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpenseReports;
