import { Outlet } from "react-router-dom";
import { Sidebar } from "../components";

const TechnicalBaseLayout = () => {
  return (
    <main className="page-wrapper">
      {/* left of page */}
      <Sidebar />
      {/* right side/content of the page */}
      <div className="content-wrapper">
        <Outlet />
      </div>
    </main>
  );
};

export default TechnicalBaseLayout;