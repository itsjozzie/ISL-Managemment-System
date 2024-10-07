import React, { useState, useEffect } from 'react';
import './Trends.scss';

const Trends = () => {
  const [trends, setTrends] = useState([]);

  useEffect(() => {
    // Fetch trends data from API
    // Placeholder for API call
    setTrends([
      { id: 1, trend: 'Revenue Growth', value: '5% Increase' },
      { id: 2, trend: 'Cost Reduction', value: '3% Decrease' },
    ]);
  }, []);

  return (
    <div className="trends">
      <h1>Trends</h1>
      <div className="trend-card">
        {trends.map(trend => (
          <div key={trend.id}>
            <h2>{trend.trend}</h2>
            <p>Value: {trend.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trends;
