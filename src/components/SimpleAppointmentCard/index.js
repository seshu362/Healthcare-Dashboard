import React from 'react';
import './index.css';

const SimpleAppointmentCard = ({ title, time, icon }) => {
  return (
    <div className="simple-appointment-card">
      <div className="simple-appointment-info">
        <h4 className="simple-appointment-title">{title}</h4>
        <p className="simple-appointment-time">{time}</p>
      </div>
      <div className="simple-appointment-icon">
        {icon}
      </div>
    </div>
  );
};

export default SimpleAppointmentCard;