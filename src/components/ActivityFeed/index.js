import React from 'react';
import './index.css';

const ActivityFeed = () => {
  // Days of the week for the chart
  const days = ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun'];
  
  return (
    <div className="activity-feed">
      <div className="activity-header">
        <h3 className="activity-title">Activity</h3>
        <span className="activity-count">3 appointment on this week</span>
      </div>
      
      <div className="activity-chart">
        {days.map((day, index) => (
          <div className="day-column" key={index}>
            <div className="bar-group">
              {/* Create multiple bars with varying heights for each day */}
              <div className={`bar bar-grey ${index % 2 === 0 ? 'bar-tall' : 'bar-short'}`}></div>
              <div className={`bar bar-grey ${index % 3 === 0 ? 'bar-medium' : 'bar-short'}`}></div>
              <div className={`bar bar-grey ${index % 4 === 0 ? 'bar-short' : 'bar-medium'}`}></div>
              <div className={`bar bar-grey ${index % 5 === 0 ? 'bar-tall' : 'bar-short'}`}></div>
              
              <div className={`bar bar-cyan ${index === 0 || index === 4 || index === 6 ? 'bar-tall' : 'bar-short'}`}></div>
              <div className={`bar bar-grey ${index % 2 === 1 ? 'bar-medium' : 'bar-short'}`}></div>
              
              <div className={`bar bar-indigo ${index === 1 || index === 3 || index === 5 ? 'bar-tall' : 'bar-short'}`}></div>
              <div className={`bar bar-grey ${index % 3 === 2 ? 'bar-medium' : 'bar-short'}`}></div>
            </div>
            <div className="day-label">{day}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;