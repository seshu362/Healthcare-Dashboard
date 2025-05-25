// Sidebar.js
import React, { useState } from 'react';
import './index.css'; // Changed from index.css to Sidebar.css
import { 
  RiDashboardLine,
  RiHistoryLine, 
  RiCalendarLine, 
  RiFileList2Line,
  RiBarChartBoxLine,
  RiMessage2Line,
  RiCustomerService2Line,
  RiSettings3Line,
  RiMenuLine,
  RiCloseLine
} from 'react-icons/ri';

const Sidebar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <button className="mobile-menu-button" onClick={toggleMobileMenu}>
        <RiMenuLine />
      </button>

      <div className={`sidebar ${isMobileMenuOpen ? 'mobile-menu-open' : ''}`}>
        <div className="mobile-menu-header">
          <div className="logo-container">
            <h1 className="logo">
              <span className="highlight">Health</span>care.
            </h1>
          </div>
          <button className="mobile-close-button" onClick={toggleMobileMenu}>
            <RiCloseLine />
          </button>
        </div>

        <div className="logo-container desktop-logo">
          <h1 className="logo">
            <span className="highlight">Health</span>care.
          </h1>
        </div>

        <div className="sidebar-section">
          <h2 className="section-title">General</h2>
          <ul className="nav-list">
            <li className="nav-item active">
              <RiDashboardLine className="nav-icon" />
              <span>Dashboard</span>
            </li>
            <li className="nav-item">
              <RiHistoryLine className="nav-icon" />
              <span>History</span>
            </li>
            <li className="nav-item">
              <RiCalendarLine className="nav-icon" />
              <span>Calendar</span>
            </li>
            <li className="nav-item">
              <RiFileList2Line className="nav-icon" />
              <span>Appointments</span>
            </li>
            <li className="nav-item">
              <RiBarChartBoxLine className="nav-icon" />
              <span>Statistics</span>
            </li>
          </ul>
        </div>

        <div className="sidebar-section">
          <h2 className="section-title">Tools</h2>
          <ul className="nav-list">
            <li className="nav-item">
              <RiMessage2Line className="nav-icon" />
              <span>Chat</span>
            </li>
            <li className="nav-item">
              <RiCustomerService2Line className="nav-icon" />
              <span>Support</span>
            </li>
          </ul>
        </div>
        
        <div className="sidebar-section settings-section">
          <ul className="nav-list">
            <li className="nav-item">
              <RiSettings3Line className="nav-icon" />
              <span>Setting</span>
            </li>
          </ul>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-overlay" onClick={toggleMobileMenu}></div>
      )}
    </>
  );
};

export default Sidebar;