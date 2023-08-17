import React from 'react';
import './Schedule.css'
const ScheduleItem = ({ scheduleItem }) => (
  <div className="schedule-item">
    <div className="schedule-time">{scheduleItem.time}</div>
    <div className="schedule-details">
      <h3 className="schedule-event">{scheduleItem.event}</h3>
      <p className="schedule-location">{scheduleItem.location}</p>
    </div>
  </div>
);

export default ScheduleItem;
