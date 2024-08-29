import React from 'react';
import KeyFinancialMetrics from "../../components/dashboard/KeyFinancialMetrics/KeyFinancialMetrics";
import RecentTransactions from "../../components/dashboard/RecentTransactions/RecentTransactions";
import OutstandingInvoices from "../../components/dashboard/OutstandingInvoices/OutstandingInvoices";
import FinancialDeadlines from "../../components/dashboard/FinancialDeadlines/FinancialDeadlines";
import './Dashboard.scss';

const FinanceDashboard = () => {
  return (
    <div className="dashboard-container">
      
      <div className="content-area">
        <KeyFinancialMetrics />
        <RecentTransactions />
        <OutstandingInvoices />
        <FinancialDeadlines />
      </div>
    </div>
  );
};

export default FinanceDashboard;
