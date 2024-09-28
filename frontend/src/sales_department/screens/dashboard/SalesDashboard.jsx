import React from 'react';
import './SalesDashboard.scss';

const SalesDashboard = () => {
  return (
    <div className="sales-dashboard">
      <h1>Sales Dashboard</h1>
      <div className="dashboard-content">
        <div className="card">Total Sales</div>
        <div className="card">New Leads</div>
        <div className="card">Revenue Growth</div>
        <div className="card">Client Feedback</div>
      </div>
    </div>
  );
};

export default SalesDashboard;
