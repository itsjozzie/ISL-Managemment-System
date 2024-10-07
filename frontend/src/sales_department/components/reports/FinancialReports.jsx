import React, { useState, useEffect } from 'react';
import './FinancialReports.scss';

const FinancialReports = () => {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    // Fetch financial reports data from API
    // Placeholder for API call
    setReports([
      { id: 1, type: 'Q1 Report', date: '2024-04-01' },
      { id: 2, type: 'Q2 Report', date: '2024-07-01' },
    ]);
  }, []);

  return (
    <div className="financial-reports">
      <h1>Financial Reports</h1>
      <div className="report-card">
        {reports.map(report => (
          <div key={report.id}>
            <h2>{report.type}</h2>
            <p>Date: {report.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinancialReports;
