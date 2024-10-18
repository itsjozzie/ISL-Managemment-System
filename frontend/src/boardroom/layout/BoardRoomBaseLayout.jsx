import React from "react";
import { Outlet } from "react-router-dom";
import { SidebarPage } from "../components";

const BoardRoomBaseLayout = () => {
  return (
    <div className="boardroom-base-layout">
      <SidebarPage />
      <main className="boardroom-content">
        <Outlet />
      </main>
    </div>
  );
};

export default BoardRoomBaseLayout;
