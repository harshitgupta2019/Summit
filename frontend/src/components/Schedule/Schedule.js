import React from "react";
import ScheduleItem from "./ScheduleItem"; // Assuming you have a ScheduleItem component
import "./Schedule.css"; // Import your CSS file

const SchedulePage = () => {
  const scheduleData = [
    {
      id: 1,
      time: "7:00 am–6:00 pm",
      event: "Networking Hall Open",
      location: "Main Hall",
    },
    {
      id: 2,
      time: "7:00 am",
      event: "BreakFast",
      location: "Networking Hall",
    },
    {
      id: 3,
      time: "8:30 am",
      event: "Welcome",
      location: "Event",
    },
    {
      id: 4,
      time: "9:00 am",
      event: "Opening KeyNote",
      location: "Conference Room A",
    },
    {
      id: 5,
      time: "10:00 am",
      event: "The Science of Sustainability",
      location: "Conference Room A",
    },
    {
      id: 6,
      time: "11:00 am",
      event: "Panel Discussion: Sustainable Farming Practices",
      location: "Conference Room B",
    },
    {
      id: 7,
      time: "11:30 am",
      event: "Networking Break and Lightnings Presentations",
      location: "Networking Hall",
    },
    {
      id: 8,
      time: "12:30 pm",
      event: "Lunch",
      location: "Mess",
    },
    {
      id: 9,
      time: "1:30 pm",
      event: "Concurrent Breakout Sessions",
      location: "Conference Room A",
    },
    {
      id: 10,
      time: "3:00 pm",
      event: "Networking Break and Lightnings Presentations",
      location: "Networking hall",
    },
    {
      id: 11,
      time: "4:00 pm",
      event: "Collabrating to Mitigate the Environmental Impact of Food",
      location: "Conference Room B",
    },
    {
      id: 12,
      time: "5:00 pm",
      event: "Producer Voices",
      location: "Conference Room A",
    },
    {
      id: 13,
      time: "6:00 pm",
      event: "Network Reception",
      location: "Networking Hall",
    }
  ];

  return (
    <div className="schedule-page">
      <section className="schedule-section">
        <div className="schedule-container">
          <h2 className="schedule-title">Event Schedule</h2>
          <div className="schedule-item">
            <div className="schedule-time-title">Time</div>
            <div className="schedule-details">
              <h3 className="schedule-event-title">Event & Location</h3>
            </div>
          </div>
          <hr/>
          <div className="schedule-list">
            {scheduleData.map((item) => (
              <ScheduleItem key={item.id} scheduleItem={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchedulePage;
