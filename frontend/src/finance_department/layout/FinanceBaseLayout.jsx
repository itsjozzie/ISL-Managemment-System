import React from "react";
import { Outlet } from "react-router-dom";
import FinanceSidebar from "../components/sidebar/FinanceSidebar";

const FinanceBaseLayout = () => {
  return (
    <div className="finance-base-layout">
      <FinanceSidebar />
      <main className="finance-content">
        <Outlet />
      </main>
    </div>
  );
};

export default FinanceBaseLayout;
