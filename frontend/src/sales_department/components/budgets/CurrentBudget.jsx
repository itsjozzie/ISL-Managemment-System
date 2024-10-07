import React, { useState, useEffect } from 'react';
import './CurrentBudget.scss';

const CurrentBudget = () => {
  const [budget, setBudget] = useState({});

  useEffect(() => {
    // Fetch current budget data from API
    // Placeholder for API call
    setBudget({
      totalBudget: 50000,
      usedBudget: 25000,
      remainingBudget: 25000,
    });
  }, []);

  return (
    <div className="current-budget">
      <h1>Current Budget</h1>
      <div className="overview">
        <p>Total Budget: ${budget.totalBudget}</p>
        <p>Used Budget: ${budget.usedBudget}</p>
        <p>Remaining Budget: ${budget.remainingBudget}</p>
      </div>
      <div className="breakdown">
        <h2>Budget Breakdown</h2>
        <ul>
          <li>Department A: $10000</li>
          <li>Department B: $15000</li>
          <li>Department C: $20000</li>
        </ul>
      </div>
    </div>
  );
};

export default CurrentBudget;
