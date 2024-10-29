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
import "./SidebarPage.scss";
import { SidebarContext } from "../../context/SidebarContext";

const SidebarPage = () => {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const navbarRef = useRef(null);
  const [openMenus, setOpenMenus] = useState({
    booking: false,
    boardrooms: false,
    settings: false,
    help: false,
    userManagement: false,
    requestManagement: false,
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
              <Link to="/boardroom/dashboard" className="menu-link active">
                <span className="menu-link-icon"><MdOutlineGridView size={18} /></span>
                <span className="menu-link-text">Dashboard</span>
              </Link>
            </li>

            <li className={`menu-item ${openMenus.booking ? 'open' : ''}`}>
              <div onClick={() => toggleMenu('booking')} className="menu-link">
                <span className="menu-link-icon"><MdOutlineMeetingRoom size={20} /></span>
                <span className="menu-link-text">Booking</span>
                <span className="menu-link-expand-icon">
                  {openMenus.booking ? <MdExpandLess size={20} /> : <MdExpandMore size={20} />}
                </span>
              </div>
              {renderSubMenu('booking', [
                { path: '/boardroom/bookings/upcoming', label: 'Upcoming Bookings' },
                { path: '/boardroom/bookings/history', label: 'Booking History' },
                { path: '/boardroom/bookings/form', label: 'Booking Form' },
              ])}
            </li>

            <li className={`menu-item ${openMenus.userManagement ? 'open' : ''}`}>
              <div onClick={() => toggleMenu('management')} className="menu-link">
                <span className="menu-link-icon"><MdOutlineSettings size={20} /></span>
                <span className="menu-link-text"> Management</span>
                <span className="menu-link-expand-icon">
                  {openMenus.management ? <MdExpandLess size={20} /> : <MdExpandMore size={20} />}
                </span>
              </div>
              {renderSubMenu('management', [
                { path: '/boardroom/managements/user', label: 'Manage Users' },
                { path: '/boardroom/managements/request', label: 'Manage Requests' },
                { path: '/boardroom/managements/notifications', label: 'Notification Settings' },

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
                { path: '/boardroom/boardrooms/view', label: 'View Boardrooms' },
                { path: '/boardroom/boardrooms/manage', label: 'Manage Boardrooms' },
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
                { path: '/boardroom/help/faq', label: 'FAQ' },
                { path: '/boardroom/help/contact', label: 'Contact Support' },
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
