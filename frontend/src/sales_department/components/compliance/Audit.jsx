import React, { useState, useEffect } from 'react';
import './Audit.scss';

const Audit = () => {
  const [audits, setAudits] = useState([]);

  useEffect(() => {
    // Fetch audit data from API
    // Placeholder for API call
    setAudits([
      { id: 1, auditType: 'Internal', date: '2024-08-10', result: 'Passed' },
      { id: 2, auditType: 'External', date: '2024-08-20', result: 'Pending' },
    ]);
  }, []);

  return (
    <div className="audit">
      <h1>Audit</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Audit Type</th>
            <th>Date</th>
            <th>Result</th>
          </tr>
        </thead>
        <tbody>
          {audits.map(audit => (
            <tr key={audit.id}>
              <td>{audit.id}</td>
              <td>{audit.auditType}</td>
              <td>{audit.date}</td>
              <td>{audit.result}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Audit;
