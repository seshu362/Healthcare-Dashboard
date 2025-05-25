import React from 'react';
import './index.css';
import { RiSearchLine, RiAddLine, RiUser3Fill } from 'react-icons/ri';
import AnatomySection from '../AnatomySection';
import HealthStatusCards from '../HealthStatusCards';
import CalendarView from '../CalendarView';
import ActivityFeed from '../ActivityFeed';
import { RiArrowLeftFill , RiArrowRightFill} from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";

const DashboardMainContent = () => {
  return (
    <div className="dashboard-main">
      <div className="dashboard-content">
        {/* Left Panel */}
        <div className="left-panel">
          {/* Left Panel Header */}
          <div className="left-panel-header">
            <div className="search-bar">
              <RiSearchLine className="search-icon" />
              <input type="text" placeholder="Search" />
              <button className="notification-btn">
              <IoNotifications color='#2d2995' />
            </button>
            </div>
            
          </div>
          
          {/* Dashboard Title */}
          <div className="dashboard-title-section">
            <h1 className="dashboard-title">Dashboard</h1>
            <div className="week-selector">
              <span>This Week</span>
              <RiArrowDropDownLine color='#2d2995' size={22}/>
            </div>
          </div>
          
          {/* Anatomy Section */}
          <div className="anatomy-container">
            <AnatomySection />
            <HealthStatusCards />
          </div>
          
          {/* Activity Feed */}
          <div className="activity-container">
            <ActivityFeed />
          </div>
        </div>
        
        {/* Right Panel */}
        <div className="right-panel">
          {/* Top right user controls */}
          <div className="user-controls">
            <div className="user-avatar">
              <RiUser3Fill />
            </div>
            <button className="add-btn">
              <RiAddLine />
            </button>
          </div>
          
          {/* Calendar Header */}
          <div className="calendar-header">
            <h2 className="calendar-title">October 2021</h2>
            <div className="calendar-nav">
              <button className="nav-btn">
                <RiArrowLeftFill color='#2d2995' size={20}/>
              </button>
              <button className="nav-btn">
                <RiArrowRightFill color='#2d2995' size={20}/>
              </button>
            </div>
          </div>
           {/* Calendar View */}
          <CalendarView />
          


        </div>
      </div>
    </div>
  );
};

export default DashboardMainContent;