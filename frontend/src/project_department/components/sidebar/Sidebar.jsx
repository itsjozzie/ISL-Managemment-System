import React, { useContext, useEffect, useRef, useState } from "react";
import logo from '../../../assets/images/logo.png';
import {
  MdOutlineClose,
  MdOutlineFolder,
  MdOutlineGridView,
  MdOutlinePeople,
  MdOutlineTask,
  MdOutlineAssessment,
  MdExpandLess,
  MdExpandMore,
  MdOutlineLogout
} from "react-icons/md";
import { Link } from "react-router-dom";
import "./Sidebar.scss";
import { SidebarContext } from "../../context/SidebarContext";

const Sidebar = () => {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  const navbarRef = useRef(null);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isPersonnelOpen, setIsPersonnelOpen] = useState(false);
  const [isClientsOpen, setIsClientsOpen] = useState(false);

  const handleClickOutside = (event) => {
    if (navbarRef.current && !navbarRef.current.contains(event.target) && event.target.className !== "sidebar-open-btn") {
      closeSidebar();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (setter) => {
    setter(prev => !prev);
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
              <Link to="/project/dashboard" className="menu-link active">
                <span className="menu-link-icon">
                  <MdOutlineGridView size={18} />
                </span>
                <span className="menu-link-text">Dashboard</span>
              </Link>
            </li>
            <li className={`menu-item ${isProjectsOpen ? 'open' : ''}`}>
              <div onClick={() => toggleDropdown(setIsProjectsOpen)} className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineFolder size={20} />
                </span>
                <span className="menu-link-text">Projects</span>
                <span className="menu-link-expand-icon">
                  {isProjectsOpen ? <MdExpandLess size={20} /> : <MdExpandMore size={20} />}
                </span>
              </div>
              {isProjectsOpen && (
                <ul className="sub-menu">
                  <li>
                    <Link to="/project/projects/all">All Projects</Link>
                  </li>
                  <li>
                    <Link to="/project/projects/add">Add New Project</Link>
                  </li>
                  <li>
                    <Link to="/project/projects/reports">Project Reports</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className={`menu-item ${isPersonnelOpen ? 'open' : ''}`}>
              <div onClick={() => toggleDropdown(setIsPersonnelOpen)} className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlinePeople size={18} />
                </span>
                <span className="menu-link-text">Personnel</span>
                <span className="menu-link-expand-icon">
                  {isPersonnelOpen ? <MdExpandLess size={20} /> : <MdExpandMore size={20} />}
                </span>
              </div>
              {isPersonnelOpen && (
                <ul className="sub-menu">
                  <li>
                    <Link to="/project/personnel/all">All Personnel</Link>
                  </li>
                  <li>
                    <Link to="/project/personnel/add">Add New Personnel</Link>
                  </li>
                  <li>
                    <Link to="/project/personnel/assignments">Assignments</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className={`menu-item ${isClientsOpen ? 'open' : ''}`}>
              <div onClick={() => toggleDropdown(setIsClientsOpen)} className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlinePeople size={18} />
                </span>
                <span className="menu-link-text">Clients</span>
                <span className="menu-link-expand-icon">
                  {isClientsOpen ? <MdExpandLess size={20} /> : <MdExpandMore size={20} />}
                </span>
              </div>
              {isClientsOpen && (
                <ul className="sub-menu">
                  <li>
                    <Link to="/project/clients/all">All Clients</Link>
                  </li>
                  <li>
                    <Link to="/project/clients/add">Add New Client</Link>
                  </li>
                  <li>
                    <Link to="/project/clients/interactions">Client Interactions</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="menu-item">
              <Link to="/project/progress" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineTask size={20} />
                </span>
                <span className="menu-link-text">Progress</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/project/reports" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineAssessment size={20} />
                </span>
                <span className="menu-link-text">Reports</span>
              </Link>
            </li>
            <li className="menu-item">
              <Link to="/logout" className="menu-link">
                <span className="menu-link-icon">
                  <MdOutlineLogout size={20} />
                </span>
                <span className="menu-link-text">Logout</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Sidebar;
