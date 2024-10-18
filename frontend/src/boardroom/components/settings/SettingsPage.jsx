import { Outlet } from 'react-router-dom'

const SettingsPage = () => {
  return (
    <div className="booking-page">
      <Outlet /> 
    </div>
  );
};

export default SettingsPage;
