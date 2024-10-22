import React, { useContext, useEffect, useRef, useState } from "react";
import logo from '../../../assets/images/logo.png';
import {
  MdOutlineClose,
  MdOutlineGridView,
  MdOutlineMeetingRoom,
  MdOutlineLogout,
  MdOutlineSettings,
  MdOutlineHelp,
  MdExpandLess,
  MdExpandMore,
} from "react-icons/md";
import { Link } from "react-router-dom";
import "./SidebarPage.scss"; // Keep the same SCSS file path
import { SidebarContext } from "../../context/SidebarContext";

const SidebarPage = () => {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const navbarRef = useRef(null);
  const [openMenus, setOpenMenus] = useState({
    booking: false,
    boardrooms: false,
    settings: false,
    help: false,
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

            <li className={`menu-item ${openMenus.booking ? 'open' : ''}`} >
              <div onClick={() => toggleMenu('booking')} className="menu-link">
                <span className="menu-link-icon"><MdOutlineMeetingRoom size={20} /></span>
                <span className="menu-link-text">Booking</span>
                <span className="menu-link-expand-icon">
                  {openMenus.booking ? <MdExpandLess size={20} /> : <MdExpandMore size={20} />}
                </span>
              </div>
              {renderSubMenu('booking', [
                { path: 'booking/upcoming', label: 'Upcoming Bookings' },
                { path: 'booking/history', label: 'Booking History' },
              ])}
            </li>

            <li className={`menu-item ${openMenus.boardrooms ? 'open' : ''}`}>
              <div onClick={() => toggleMenu('boardrooms')} className="menu-link">
                <span className="menu-link-icon"><MdOutlineMeetingRoom size={20} /></span>
                <span className="menu-link-text">Boardrooms</span>
                <span className="menu-link-expand-icon">
                  {openMenus.boardrooms ? <MdExpandLess size={20} /> : <MdExpandMore size={20} />}
                </span>
              </div>
              {renderSubMenu('boardrooms', [
                { path: 'boardrooms/view', label: 'View Boardrooms' },
                { path: 'boardrooms/manage', label: 'Manage Boardrooms' },
              ])}
            </li>

            <li className={`menu-item ${openMenus.settings ? 'open' : ''}`}>
              <div onClick={() => toggleMenu('settings')} className="menu-link">
                <span className="menu-link-icon"><MdOutlineSettings size={20} /></span>
                <span className="menu-link-text">Settings</span>
                <span className="menu-link-expand-icon">
                  {openMenus.settings ? <MdExpandLess size={20} /> : <MdExpandMore size={20} />}
                </span>
              </div>
              {renderSubMenu('settings', [
                { path: 'settings/account', label: 'Account Settings' },
                { path: 'settings/notifications', label: 'Notification Settings' },
              ])}
            </li>

            <li className={`menu-item ${openMenus.help ? 'open' : ''}`}>
              <div onClick={() => toggleMenu('help')} className="menu-link">
                <span className="menu-link-icon"><MdOutlineHelp size={20} /></span>
                <span className="menu-link-text">Help</span>
                <span className="menu-link-expand-icon">
                  {openMenus.help ? <MdExpandLess size={20} /> : <MdExpandMore size={20} />}
                </span>
              </div>
              {renderSubMenu('help', [
                { path: 'help/faq', label: 'FAQ' },
                { path: 'help/contact', label: 'Contact Support' },
              ])}
            </li>

            <li className="menu-item logout">
              <Link to="/logout" className="menu-link">
                <span className="menu-link-icon"><MdOutlineLogout size={20} /></span>
                <span className="menu-link-text">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default SidebarPage;
