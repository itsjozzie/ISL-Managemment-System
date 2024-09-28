import React, { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import './SalesSidebar.scss';
import {
  MdDashboard,
  MdTrendingUp,
  MdOutlineSupervisorAccount,
  MdOutlineAttachMoney,
  MdOutlineAssessment,
  MdOutlineSettings,
  MdOutlineSupport,
  MdOutlineAccountCircle,
  MdOutlineClose
} from 'react-icons/md';
import { SidebarContext } from "../../context/SidebarContext"; // Assuming you have this context

const SalesSidebar = () => {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const navbarRef = useRef(null);
  const [dropdownStates, setDropdownStates] = useState({
    isLeadsOpen: false,
    isClientsOpen: false,
    isTransactionsOpen: false,
  });

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target)) {
      closeSidebar();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (dropdown) => {
    setDropdownStates((prevState) => ({
      ...prevState,
      [dropdown]: !prevState[dropdown],
    }));
  };

  return (
    <nav className={`sales-sidebar ${isSidebarOpen ? "sidebar-show" : ""}`} ref={navbarRef}>
      <div className="sidebar-header">
        <h2>Sales Department</h2>
        <button className="sidebar-close-btn" onClick={closeSidebar}>
          <MdOutlineClose size={24} />
        </button>
      </div>
      <ul className="sidebar-menu">
        <li className="menu-item">
          <Link to="/sales/dashboard" className="menu-link">
            <MdDashboard size={18} />
            Dashboard
          </Link>
        </li>
        <li className={`menu-item ${dropdownStates.isLeadsOpen ? 'open' : ''}`}>
          <div onClick={() => toggleDropdown('isLeadsOpen')} className="menu-link">
            <MdTrendingUp size={18} />
            Leads
            <span className="menu-link-expand-icon">
              {dropdownStates.isLeadsOpen ? '▲' : '▼'} {/* Simple toggle icon */}
            </span>
          </div>
          {dropdownStates.isLeadsOpen && (
            <ul className="sub-menu">
              <li><Link to="/sales/leads/new">New Leads</Link></li>
              <li><Link to="/sales/leads/follow-up">Follow Up</Link></li>
            </ul>
          )}
        </li>
        <li className={`menu-item ${dropdownStates.isClientsOpen ? 'open' : ''}`}>
          <div onClick={() => toggleDropdown('isClientsOpen')} className="menu-link">
            <MdOutlineSupervisorAccount size={18} />
            Clients
            <span className="menu-link-expand-icon">
              {dropdownStates.isClientsOpen ? '▲' : '▼'}
            </span>
          </div>
          {dropdownStates.isClientsOpen && (
            <ul className="sub-menu">
              <li><Link to="/sales/clients/all">All Clients</Link></li>
              <li><Link to="/sales/clients/details">Client Details</Link></li>
            </ul>
          )}
        </li>
        <li className={`menu-item ${dropdownStates.isTransactionsOpen ? 'open' : ''}`}>
          <div onClick={() => toggleDropdown('isTransactionsOpen')} className="menu-link">
            <MdOutlineAttachMoney size={18} />
            Transactions
            <span className="menu-link-expand-icon">
              {dropdownStates.isTransactionsOpen ? '▲' : '▼'}
            </span>
          </div>
          {dropdownStates.isTransactionsOpen && (
            <ul className="sub-menu">
              <li><Link to="/sales/transactions/pending">Pending Transactions</Link></li>
              <li><Link to="/sales/transactions/history">Transaction History</Link></li>
            </ul>
          )}
        </li>
        <li className="menu-item">
          <Link to="/sales/reports" className="menu-link">
            <MdOutlineAssessment size={18} />
            Reports
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/sales/settings" className="menu-link">
            <MdOutlineSettings size={18} />
            Settings
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/sales/support" className="menu-link">
            <MdOutlineSupport size={18} />
            Support
          </Link>
        </li>
        <li className="menu-item">
          <Link to="/sales/profile" className="menu-link">
            <MdOutlineAccountCircle size={18} />
            Profile
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default SalesSidebar;
