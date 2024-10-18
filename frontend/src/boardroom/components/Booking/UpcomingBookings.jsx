import { Link } from 'react-router-dom';
import './UpcomingBookings.scss';

const upcomingBookingsData = [
  {
    id: 1,
    title: 'Conference Room A - Team Meeting',
    date: '2024-10-15',
    time: '10:00 AM - 11:00 AM',
    department: 'Project',
    reason: 'Monthly team sync',
    status: 'booked',
  },
  {
    id: 2,
    title: 'Room 202 - Project Kickoff',
    date: '2024-10-16',
    time: '2:00 PM - 3:00 PM',
    department: 'Finance',
    reason: 'Initial project discussion',
    status: 'in progress',
  },
  {
    id: 3,
    title: 'Room 101 - Client Presentation',
    date: '2024-10-18',
    time: '1:00 PM - 2:00 PM',
    department: 'Sales',
    reason: 'Presentation to client',
    status: 'not booked',
  },
];

const UpcomingBookings = () => {
  const handleView = (id) => {
    console.log(`Viewing booking ${id}`);
  };

  const handleCancel = (id) => {
    console.log(`Cancelling booking ${id}`);
  };

  return (
    <div className="upcoming-bookings">
      <h4>Upcoming Bookings</h4>
      <table>
        <thead>
          <tr>
            <th>Booking Title</th>
            <th>Date</th>
            <th>Time</th>
            <th>Department</th>
            <th>Reason</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {upcomingBookingsData.map(booking => (
            <tr key={booking.id}>
              <td>
                <Link to="/booking/upcoming" className="submenu-item">
                  {booking.title}
                </Link>
              </td>
              <td>{booking.date}</td>
              <td>{booking.time}</td>
              <td>{booking.department}</td>
              <td>{booking.reason}</td>
              <td>
                <span className={`status-dot ${booking.status}`}></span>
                {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
              </td>
              <td>
                <button onClick={() => handleView(booking.id)} className="action-button view-button">
                  View
                </button>
                <button onClick={() => handleCancel(booking.id)} className="action-button cancel-button">
                  Cancel
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UpcomingBookings;
