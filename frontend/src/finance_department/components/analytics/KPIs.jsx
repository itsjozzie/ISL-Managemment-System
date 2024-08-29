import React, { useState, useEffect } from 'react';
import './KPIs.scss';

const KPIs = () => {
  const [kpis, setKpis] = useState([]);

  useEffect(() => {
    // Fetch KPIs data from API
    // Placeholder for API call
    setKpis([
      { id: 1, kpi: 'Customer Satisfaction', value: '85%' },
      { id: 2, kpi: 'Net Profit Margin', value: '12%' },
    ]);
  }, []);

  return (
    <div className="kpis">
      <h1>Key Performance Indicators (KPIs)</h1>
      <div className="kpi-card">
        {kpis.map(kpi => (
          <div key={kpi.id}>
            <h2>{kpi.kpi}</h2>
            <p>Value: {kpi.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KPIs;
