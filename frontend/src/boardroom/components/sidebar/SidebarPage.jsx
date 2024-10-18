import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  MdOutlineGridView,
  MdOutlineMeetingRoom,
  MdExpandLess,
  MdExpandMore,
  MdOutlineLogout,
  MdOutlineSettings,
  MdOutlineHelp,
} from 'react-icons/md';
import logo from "../../../assets/images/logo.png";
import './SidebarPage.scss';

const SidebarPage = () => {
  const [openMenus, setOpenMenus] = useState({
    booking: false,
    boardrooms: false,
    settings: false,
    help: false,
  });

  const location = useLocation();

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
            <Link to={link.path} className={`${location.pathname === link.path ? 'active-sub' : ''}`}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    ) : null;
  };

  return (
    <nav className="sidebar">
      <div className="sidebar-top">
        <img src={logo} alt="Logo" className="sidebar-logo" />
      </div>
      <div className="sidebar-body">
        <ul className="menu-list">
          <li className="menu-item">
            <Link to="dashboard" className={`menu-link ${location.pathname === '/' ? 'active' : ''}`}>
              <span className="menu-link-icon"><MdOutlineGridView size={20} /></span>
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
              { path: '/booking/upcoming', label: 'Upcoming Bookings' },
              { path: '/booking/history', label: 'Booking History' },
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
              { path: '/boardrooms/view', label: 'View Boardrooms' },
              { path: '/boardrooms/manage', label: 'Manage Boardrooms' },
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
              { path: '/settings/account', label: 'Account Settings' },
              { path: '/settings/notifications', label: 'Notification Settings' },
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
              { path: '/help/faq', label: 'FAQ' },
              { path: '/help/contact', label: 'Contact Support' },
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
    </nav>
  );
};

export default SidebarPage;
