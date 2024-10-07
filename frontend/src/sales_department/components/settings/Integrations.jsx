import React, { useState, useEffect } from 'react';
import './Integrations.scss';

const Integrations = () => {
  const [integrations, setIntegrations] = useState([]);

  useEffect(() => {
    // Fetch integrations data from API
    // Placeholder for API call
    setIntegrations([
      { id: 1, service: 'Service A', status: 'Connected' },
      { id: 2, service: 'Service B', status: 'Disconnected' },
    ]);
  }, []);

  return (
    <div className="integrations">
      <h1>Integrations</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Service</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {integrations.map(integration => (
            <tr key={integration.id}>
              <td>{integration.id}</td>
              <td>{integration.service}</td>
              <td>{integration.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Integrations;
