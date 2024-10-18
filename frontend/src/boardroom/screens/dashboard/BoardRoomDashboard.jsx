import React from 'react';
import Metrics from "../../components/dashboard/metrics/Metrics";
import Overview from "../../components/dashboard/overview/Overview";
import Reports from "../../components/dashboard/reports/Reports";
import Charts from "../../components/dashboard/charts/Charts";
import './BoardRoomDashboard.scss';

const BoardRoomDashboard = () => {
  return (
    <div className="dashboard-container">
      
      <div className="content-area">
        <Metrics />
        <Overview />
        <Reports />
        <Charts />
      </div>
    </div>
  );
};

export default BoardRoomDashboard;
