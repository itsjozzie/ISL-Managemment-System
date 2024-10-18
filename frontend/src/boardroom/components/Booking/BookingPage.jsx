import { Outlet } from 'react-router-dom';
import './BookingPage.scss'; 

const BookingPage = () => {
  return (
    <div className="booking-page">
      <Outlet /> 
    </div>
  );
};

export default BookingPage;
