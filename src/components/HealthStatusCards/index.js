import React from 'react';
import './index.css';
import { FaLungs } from 'react-icons/fa';
import { GiTooth } from 'react-icons/gi';
import { GiBrokenBone } from 'react-icons/gi';
import { BsArrowRightShort } from "react-icons/bs";

const HealthStatusCards = () => {
  return (
    <div className="health-status-cards">
      <div className="health-card lungs">
        <div className="health-card-icon">
          <FaLungs />
        </div>
        <div className="health-card-content">
          <h3 className="health-card-title">Lungs</h3>
          <p className="health-card-date">Date: 26 Oct 2021</p>
          <div className="health-card-status">
            <div className="status-bar">
              <div className="status-fill lungs-fill"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="health-card teeth">
        <div className="health-card-icon">
          <GiTooth />
        </div>
        <div className="health-card-content">
          <h3 className="health-card-title">Teeth</h3>
          <p className="health-card-date">Date: 26 Oct 2021</p>
          <div className="health-card-status">
            <div className="status-bar">
              <div className="status-fill teeth-fill"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="health-card bone">
        <div className="health-card-icon">
          <GiBrokenBone />
        </div>
        <div className="health-card-content">
          <h3 className="health-card-title">Bone</h3>
          <p className="health-card-date">Date: 26 Oct 2021</p>
          <div className="health-card-status">
            <div className="status-bar">
              <div className="status-fill bone-fill"></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="details-link">
        <span>Details</span>
        <BsArrowRightShort color='#2d2995' size={20}/>
      </div>
    </div>
  );
};

export default HealthStatusCards;