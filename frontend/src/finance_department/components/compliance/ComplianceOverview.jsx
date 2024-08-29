import React, { useState, useEffect } from 'react';
import './ComplianceOverview.scss';

const ComplianceOverview = () => {
  const [compliance, setCompliance] = useState([]);

  useEffect(() => {
    // Fetch compliance overview data from API
    // Placeholder for API call
    setCompliance([
      { id: 1, regulation: 'Regulation A', status: 'Compliant' },
      { id: 2, regulation: 'Regulation B', status: 'Non-Compliant' },
    ]);
  }, []);

  return (
    <div className="compliance-overview">
      <h1>Compliance Overview</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Regulation</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {compliance.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.regulation}</td>
              <td>{item.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComplianceOverview;
