import React from 'react';
import './index.css';
import { GiTooth } from 'react-icons/gi';
import { FiEye } from 'react-icons/fi';
import { FaPencilAlt, FaHeart, FaUser } from 'react-icons/fa';
import { FaHandRock } from "react-icons/fa";


const CalendarView = () => {
  return (
    <div className="calendarView-calendar-section">
      
      <div className="calendarView-calendar-grid">
        <div className="calendarView-weekday-row">
    
          <div className="calendarView-weekday-cell">
            <div className="calendarView-day-label">Mon</div>
            <div className="calendarView-date-label">25</div>
          </div>
          <div className="calendarView-weekday-cell">
            <div className="calendarView-day-label">Tues</div>
            <div className="calendarView-date-label">26</div>
          </div>
          <div className="calendarView-weekday-cell">
            <div className="calendarView-day-label">Wed</div>
            <div className="calendarView-date-label">27</div>
          </div>
          <div className="calendarView-weekday-cell">
            <div className="calendarView-day-label">Thurs</div>
            <div className="calendarView-date-label">28</div>
          </div>
          <div className="calendarView-weekday-cell">
            <div className="calendarView-day-label">Fri</div>
            <div className="calendarView-date-label">29</div>
          </div>
          <div className="calendarView-weekday-cell">
            <div className="calendarView-day-label">Sat</div>
            <div className="calendarView-date-label">30</div>
          </div>
          <div className="calendarView-weekday-cell">
            <div className="calendarView-day-label">Sun</div>
            <div className="calendarView-date-label">31</div>
          </div>
        </div>
        
        <div className="calendarView-time-grid">
          <div className="calendarView-time-row">
            
            <div className="calendarView-time-cell">
              <div className="calendarView-time-pill">10:00</div>
            </div>
            <div className="calendarView-time-cell">
              <div className="calendarView-time-pill">08:00</div>
            </div>
            <div className="calendarView-time-cell">
              <div className="calendarView-time-pill">12:00</div>
            </div>
            <div className="calendarView-time-cell">
              <div className="calendarView-time-pill">10:00</div>
            </div>
            <div className="calendarView-time-cell">
              <div className="calendarView-time-pill calendarView-empty">—</div>
            </div>
            <div className="calendarView-time-cell">
              <div className="calendarView-time-pill calendarView-purple">12:00</div>
            </div>
            <div className="calendarView-time-cell">
              <div className="calendarView-time-pill calendarView-purple">09:00</div>
            </div>
          </div>
          
          <div className="calendarView-time-row">

            <div className="calendarView-time-cell">
              <div className="calendarView-time-pill">11:00</div>
            </div>
            <div className="calendarView-time-cell">
              <div className="calendarView-time-pill calendarView-blue">09:00</div>
            </div>
            <div className="calendarView-time-cell">
              <div className="calendarView-time-pill calendarView-empty">—</div>
            </div>
            <div className="calendarView-time-cell">
              <div className="calendarView-time-pill calendarView-purple">11:00</div>
            </div>
            <div className="calendarView-time-cell">
              <div className="calendarView-time-pill">14:00</div>
            </div>
            <div className="calendarView-time-cell">
              <div className="calendarView-time-pill">14:00</div>
            </div>
            <div className="calendarView-time-cell">
              <div className="calendarView-time-pill">10:00</div>
            </div>
          </div>
          
          <div className="calendarView-time-row">
        
            <div className="calendarView-time-cell">
              <div className="calendarView-time-pill">12:00</div>
            </div>
            <div className="calendarView-time-cell">
              <div className="calendarView-time-pill">10:00</div>
            </div>
            <div className="calendarView-time-cell">
              <div className="calendarView-time-pill">13:00</div>
            </div>
            <div className="calendarView-time-cell">
              <div className="calendarView-time-pill calendarView-empty">—</div>
            </div>
            <div className="calendarView-time-cell">
              <div className="calendarView-time-pill">16:00</div>
            </div>
            <div className="calendarView-time-cell">
              <div className="calendarView-time-pill">15:00</div>
            </div>
            <div className="calendarView-time-cell">
              <div className="calendarView-time-pill">11:00</div>
            </div>
          </div>
        </div>
      </div>

      <div className="calendarView-appointment-card-container">
        <div className="calendarView-appointment-card calendarView-blue-card">
          <div className="calendarView-appointment-info">
            <h3>Dentist</h3>
            <p>09:00-11:00</p>
            <p>Dr. Cameron Williamson</p>
          </div>
          <div className="calendarView-card-icon">
            <GiTooth />
          </div>
        </div>
        
        <div className="calendarView-appointment-card-2 calendarView-purple-card">
          <div className="calendarView-appointment-info-2">
            <h3>Physiotherapy Appointment  </h3>
            
            <p>11:00-12:00</p>
            <p>Dr. Kevin Bjones</p>
          </div>
          <div className="calendarView-card-icon">
                <FaHandRock color='rgb(232, 232, 200)'/>
          </div>
        </div>
      </div>
      
      <div className="calendarView-upcoming-schedule">
        <h2>The Upcoming Schedule</h2>
        
        <div className="calendarView-schedule-day">
          <h3>On Thursday</h3>
          <div className="calendarView-schedule-cards">
            <div className="calendarView-schedule-card">
              <div className="calendarView-schedule-info">
                <h4>Health checkup complete</h4>
                <p>11:00 AM</p>
              </div>
              <div className="calendarView-schedule-icon">
                <FaPencilAlt />
              </div>
            </div>
            
            <div className="calendarView-schedule-card">
              <div className="calendarView-schedule-info">
                <h4>Ophthalmologist</h4>
                <p>14:00 PM</p>
              </div>
              <div className="calendarView-schedule-icon">
                <FiEye />
              </div>
            </div>
          </div>
        </div>
        
        <div className="calendarView-schedule-day">
          <h3>On Saturday</h3>
          <div className="calendarView-schedule-cards">
            <div className="calendarView-schedule-card">
              <div className="calendarView-schedule-info">
                <h4>Cardiologist</h4>
                <p>12:00 AM</p>
              </div>
              <div className="calendarView-schedule-icon">
                <FaHeart />
              </div>
            </div>
            
            <div className="calendarView-schedule-card">
              <div className="calendarView-schedule-info">
                <h4>Neurologist</h4>
                <p>16:00 PM</p>
              </div>
              <div className="calendarView-schedule-icon">
                <FaUser />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;