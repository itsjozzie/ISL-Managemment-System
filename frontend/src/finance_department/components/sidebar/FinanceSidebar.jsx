import React, { useContext, useEffect, useRef, useState } from "react";
import logo from '../../../assets/images/logo.png';
import {
  MdOutlineClose,
  MdOutlineGridView,
  MdOutlineAccountBalance,
  MdOutlineAttachMoney,
  MdOutlineAssessment,
  MdOutlineGavel,
  MdOutlineTrendingUp,
  MdOutlineSettings,
  MdOutlineSupport,
  MdOutlineAccountCircle,
  MdExpandLess,
  MdExpandMore,
  MdOutlineMeetingRoom,
  MdOutlineLogout
} from "react-icons/md";
import { Link } from "react-router-dom";
import "./FinanceSidebar.scss";
import { SidebarContext } from "../../context/SidebarContext";

const FinanceSidebar = () => {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const navbarRef = useRef(null);
  const [openMenus, setOpenMenus] = useState({
    accounts: false,
    budgets: false,
    reports: false,
    compliance: false,
    analytics: false,
    settings: false,
    support: false,
    userProfile: false,
  });

  const handleClickOutside = (event) => {
    if (
      navbarRef.current &&
      !navbarRef.current.contains(event.target) &&
      event.target.className !== "sidebar-open-btn"
    ) {
      closeSidebar();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = (menu) => {
    setOpenMenus((prev) => ({
      ...prev,
      [menu]: !prev[menu],
    }));
  };

  const renderSubMenu = (menu, links) => {
    return openMenus[menu] ? (
      <ul className="sub-menu">
        {links.map((link, index) => (
          <li key={index}>
            <Link to={link.path}>{link.label}</Link>
          </li>
        ))}
      </ul>
    ) : null;
  };

  return (
    <nav className={`sidebar ${isSidebarOpen ? "sidebar-show" : ""}`} ref={navbarRef}>
      <div className="sidebar-top">
        <div className="sidebar-brand">
          <img src={logo} alt="Logo" className="sidebar-logo" />
        </div>
        <button className="sidebar-close-btn" onClick={closeSidebar}>
          <MdOutlineClose size={24} />
        </button>
      </div>
      <div className="sidebar-body">
        <div className="sidebar-menu">
          <ul className="menu-list">
            <li className="menu-item">
              <Link to="dashboard" className="menu-link active">
                <span className="menu-link-icon"><MdOutlineGridView size={18} /></span>
                <span className="menu-link-text">Dashboard</span>
              </Link>
            </li>

            <li className={`menu-item ${openMenus.accounts ? 'open' : ''}`}>
              <div onClick={() => toggleMenu('accounts')} className="menu-link">
                <span className="menu-link-icon"><MdOutlineAccountBalance size={20} /></span>
                <span className="menu-link-text">Accounts</span>
                <span className="menu-link-expand-icon">{openMenus.accounts ? <MdExpandLess size={20} /> : <MdExpandMore size={20} />}</span>
              </div>
              {renderSubMenu('accounts', [
                { path: "accounts/payable", label: "Accounts Payable" },
                { path: "accounts/receivable", label: "Accounts Receivable" },
              ])}
            </li>

            <li className={`menu-item ${openMenus.budgets ? 'open' : ''}`}>
              <div onClick={() => toggleMenu('budgets')} className="menu-link">
                <span className="menu-link-icon"><MdOutlineAttachMoney size={20} /></span>
                <span className="menu-link-text">Budgets</span>
                <span className="menu-link-expand-icon">{openMenus.budgets ? <MdExpandLess size={20} /> : <MdExpandMore size={20} />}</span>
              </div>
              {renderSubMenu('budgets', [
                { path: "budgets/current", label: "Current Budget" },
                { path: "budgets/requests", label: "Budget Requests" },
              ])}
            </li>

            <li className={`menu-item ${openMenus.reports ? 'open' : ''}`}>
              <div onClick={() => toggleMenu('reports')} className="menu-link">
                <span className="menu-link-icon"><MdOutlineAssessment size={20} /></span>
                <span className="menu-link-text">Reports</span>
                <span className="menu-link-expand-icon">{openMenus.reports ? <MdExpandLess size={20} /> : <MdExpandMore size={20} />}</span>
              </div>
              {renderSubMenu('reports', [
                { path: "reports/financial", label: "Financial Reports" },
                { path: "reports/expense", label: "Expense Reports" },
                { path: "reports/revenue", label: "Revenue Analysis" },
              ])}
            </li>

            <li className={`menu-item ${openMenus.compliance ? 'open' : ''}`}>
              <div onClick={() => toggleMenu('compliance')} className="menu-link">
                <span className="menu-link-icon"><MdOutlineGavel size={20} /></span>
                <span className="menu-link-text">Compliance</span>
                <span className="menu-link-expand-icon">{openMenus.compliance ? <MdExpandLess size={20} /> : <MdExpandMore size={20} />}</span>
              </div>
              {renderSubMenu('compliance', [
                { path: "compliance/audit", label: "Audit" },
                { path: "compliance/overview", label: "Compliance Overview" },
              ])}
            </li>
            
            <li className={`menu-item ${openMenus.analytics ? 'open' : ''}`}>
              <div onClick={() => toggleMenu('analytics')} className="menu-link">
                <span className="menu-link-icon"><MdOutlineTrendingUp size={20} /></span>
                <span className="menu-link-text">Analytics</span>
                <span className="menu-link-expand-icon">{openMenus.analytics ? <MdExpandLess size={20} /> : <MdExpandMore size={20} />}</span>
              </div>
              {renderSubMenu('analytics', [
                { path: "analytics/kpis", label: "KPIs" },
                { path: "analytics/trends", label: "Trends" },
              ])}
            </li>

            <li className={`menu-item ${openMenus.boardroom ? 'open' : ''}`}>
          <div onClick={() => toggleMenu('boardroom')} className="menu-link">
            <span className="menu-link-icon"><MdOutlineMeetingRoom size={20} /></span>
            <span className="menu-link-text">Boardroom</span>
            <span className="menu-link-expand-icon">
              {openMenus.boardroom ? <MdExpandLess size={20} /> : <MdExpandMore size={20} />}
            </span>
          </div>
          {renderSubMenu('boardroom', [
            { path: "boardroom/add-request", label: "Add Request" },
            { path: "boardroom/view-requests", label: "View Requests" },
            { path: "boardroom/booking-calendar", label: "Booking Calendar" },
            { path: "boardroom/booking-status", label: "Booking Status" },
            { path: "boardroom/boardroom-list", label: "Boardroom List" },
            { path: "boardroom/notifications", label: "Notifications" },
          ], true)}
        </li>

            <li className={`menu-item ${openMenus.settings ? 'open' : ''}`}>
              <div onClick={() => toggleMenu('settings')} className="menu-link">
                <span className="menu-link-icon"><MdOutlineSettings size={20} /></span>
                <span className="menu-link-text">Settings</span>
                <span className="menu-link-expand-icon">{openMenus.settings ? <MdExpandLess size={20} /> : <MdExpandMore size={20} />}</span>
              </div>
              {renderSubMenu('settings', [
                { path: "settings/financial", label: "Financial Settings" },
                { path: "settings/user-management", label: "User Management" },
                { path: "settings/integrations", label: "Integrations" },
              ])}
            </li>

            <li className={`menu-item ${openMenus.support ? 'open' : ''}`}>
              <div onClick={() => toggleMenu('support')} className="menu-link">
                <span className="menu-link-icon"><MdOutlineSupport size={20} /></span>
                <span className="menu-link-text">Support</span>
                <span className="menu-link-expand-icon">{openMenus.support ? <MdExpandLess size={20} /> : <MdExpandMore size={20} />}</span>
              </div>
              {renderSubMenu('support', [
                { path: "support/help-center", label: "Help Center" },
                { path: "support/contact", label: "Contact Support" },
              ])}
            </li>

            <li className={`menu-item ${openMenus.userProfile ? 'open' : ''}`}>
              <div onClick={() => toggleMenu('userProfile')} className="menu-link">
                <span className="menu-link-icon"><MdOutlineAccountCircle size={20} /></span>
                <span className="menu-link-text">Profile</span>
                <span className="menu-link-expand-icon">{openMenus.userProfile ? <MdExpandLess size={20} /> : <MdExpandMore size={20} />}</span>
              </div>
              {renderSubMenu('userProfile', [
                { path: "profile/account", label: "Account Settings" },
                { path: "profile/notification", label: "Notification Settings" },
              ])}
            </li>

            <li className="menu-item">
              <Link to="/logout" className="menu-link">
                <span className="menu-link-icon"><MdOutlineLogout size={18} /></span>
                <span className="menu-link-text">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default FinanceSidebar;
