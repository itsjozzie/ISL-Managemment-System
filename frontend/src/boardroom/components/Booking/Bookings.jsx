import { Outlet } from 'react-router-dom';
import './Bookings.scss'; 

const Bookings = () => {
  return (
    <div className="booking">
      <Outlet /> 
    </div>
  );
};

export default Bookings;
