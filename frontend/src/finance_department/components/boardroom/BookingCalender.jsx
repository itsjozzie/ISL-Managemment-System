import React, { useState, useEffect } from 'react';

const BookingCalendar = () => {
  const [calendarData, setCalendarData] = useState([]);

  useEffect(() => {
    // Fetch calendar availability from API
    const fetchCalendarData = async () => {
      const response = await fetch('/api/calendar');
      const data = await response.json();
      setCalendarData(data);
    };
    fetchCalendarData();
  }, []);

  return (
    <div className="booking-calendar">
      <h2>Booking Calendar</h2>
      <div className="calendar">
        {calendarData.map((day, index) => (
          <div key={index} className={`day ${day.available ? 'available' : 'booked'}`}>
            <p>{day.date}</p>
            {day.available ? <button>Book</button> : <p>Booked</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookingCalendar;
