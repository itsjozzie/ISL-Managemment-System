import { Link } from 'react-router-dom';
import './BookingHistory.scss';

const bookingHistoryData = [
  {
    id: 1,
    title: 'Conference Room B - Strategy Meeting',
    date: '2024-10-01',
    time: '9:00 AM - 10:00 AM',
    department: 'Technical',
    reason: 'Discussing new project directions',
    status: 'completed',
  },
  {
    id: 2,
    title: 'Room 303 - Design Review',
    date: '2024-09-25',
    time: '3:00 PM - 4:00 PM',
    department: 'Project',
    reason: 'Reviewing design prototypes',
    status: 'completed',
  },
  {
    id: 3,
    title: 'Room 204 - Budget Planning',
    date: '2024-09-20',
    time: '1:00 PM - 2:00 PM',
    department: 'Finance',
    reason: 'Planning the budget for Q4',
    status: 'canceled',
  },
];

const BookingHistory = () => {
  return (
    <div className="booking-history">
      <h4>Booking History</h4>
      <table>
        <thead>
          <tr>
            <th>Booking Title</th>
            <th>Date</th>
            <th>Time</th>
            <th>Department</th>
            <th>Reason</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {bookingHistoryData.map(booking => (
            <tr key={booking.id}>
              <td>
                <Link to="/booking/history" className="submenu-item">
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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BookingHistory;
