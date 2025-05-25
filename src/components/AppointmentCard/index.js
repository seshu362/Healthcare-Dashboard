import React from 'react';
import './index.css';
import { GiTooth } from 'react-icons/gi';
import { CgGym } from 'react-icons/cg';

const AppointmentCard = ({ type, title, time, doctor }) => {
  return (
    <div className={`appointment-card ${type}`}>
      <div className="appointment-card-content">
        <h3 className="appointment-card-title">{title}</h3>
        <div className="appointment-card-time">{time}</div>
        <div className="appointment-card-doctor">{doctor}</div>
      </div>
      <div className="appointment-card-icon">
        {type === 'dentist' ? <GiTooth /> : <CgGym />}
      </div>
    </div>
  );
};

export default AppointmentCard;