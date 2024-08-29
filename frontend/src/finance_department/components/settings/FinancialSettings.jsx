import React, { useState, useEffect } from 'react';
import './FinancialSettings.scss';

const FinancialSettings = () => {
  const [settings, setSettings] = useState([]);

  useEffect(() => {
    // Fetch financial settings data from API
    // Placeholder for API call
    setSettings([
      { id: 1, setting: 'Tax Rate', value: '21%' },
      { id: 2, setting: 'Expense Limit', value: '$5000' },
    ]);
  }, []);

  return (
    <div className="financial-settings">
      <h1>Financial Settings</h1>
      <div className="setting-card">
        {settings.map(setting => (
          <div key={setting.id}>
            <h2>{setting.setting}</h2>
            <p>Value: {setting.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FinancialSettings;
