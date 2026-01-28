import "./Calendar.css";

const Calendar = () => {
  const events = [
    { id: 1, title: "Team Meeting", date: "2024-02-08", time: "10:00 AM", type: "meeting" },
    { id: 2, title: "Project Deadline", date: "2024-02-10", time: "5:00 PM", type: "deadline" },
    { id: 3, title: "Client Presentation", date: "2024-02-12", time: "2:00 PM", type: "presentation" },
    { id: 4, title: "Code Review", date: "2024-02-09", time: "3:00 PM", type: "review" },
  ];

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentDate = new Date();
  const currentDay = currentDate.getDate();

  return (
    <div className="page-container">
      <div className="page-header">
        <div>
          <h1 className="page-title">Calendar</h1>
          <p className="page-subtitle">View and manage your schedule</p>
        </div>
        <button className="btn-primary-action">+ New Event</button>
      </div>

      <div className="calendar-layout">
        <div className="calendar-main">
          <div className="calendar-header">
            <button className="calendar-nav-btn">←</button>
            <h2>February 2024</h2>
            <button className="calendar-nav-btn">→</button>
          </div>

          <div className="calendar-grid">
            {days.map((day) => (
              <div key={day} className="calendar-day-header">
                {day}
              </div>
            ))}
            
            {Array.from({ length: 35 }, (_, i) => {
              const day = i - 4; // Start from day 1
              const isCurrentDay = day === currentDay;
              const hasEvent = events.some(e => {
                const eventDate = new Date(e.date);
                return eventDate.getDate() === day;
              });
              
              return (
                <div
                  key={i}
                  className={`calendar-day ${isCurrentDay ? "today" : ""} ${hasEvent ? "has-event" : ""}`}
                >
                  {day > 0 && day <= 29 ? day : ""}
                </div>
              );
            })}
          </div>
        </div>

        <div className="calendar-sidebar">
          <h3>Upcoming Events</h3>
          <div className="events-list">
            {events.map((event) => (
              <div key={event.id} className="event-card">
                <div className={`event-type-badge event-${event.type}`}></div>
                <div className="event-details">
                  <h4>{event.title}</h4>
                  <p>{event.date} at {event.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
