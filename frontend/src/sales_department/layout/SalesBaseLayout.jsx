import React from "react";
import { Outlet } from "react-router-dom";
import { SalesSidebar } from "../components";

const SalesBaseLayout = () => {
  return (
    <div className="sales-base-layout">
      <SalesSidebar />
      <main className="sales-content">
        <Outlet />
      </main>
    </div>
  );
};

export default SalesBaseLayout;
