import React from 'react';
import SalesOverview from '../../components/dashboard/overview/SalesOverview';
import SalesChart from '../../components/dashboard/charts/SalesChart';
import SalesReports from '../../components/dashboard/reports/SalesReports';
import SalesMetrics from '../../components/dashboard/metrics/SalesMetrics'; // Import the Metrics component
import './SalesDashboard.scss';

const SalesDashboard = () => {
    return (
        <div className="sales-dashboard">
            <h1>Sales Dashboard</h1>
            <SalesMetrics /> 
            <SalesOverview />
            <SalesCharts />
            <SalesReports />
        </div>
    );
};

export default SalesDashboard;
