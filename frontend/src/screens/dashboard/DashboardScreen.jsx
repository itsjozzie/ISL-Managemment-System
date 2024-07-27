import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AreaCards, AreaCharts, AreaTable, AreaTop } from "../../components";
import UserProfile from "../../components/UserProfile/UserProfile"; 
import LoadingSpinner from "../../components/LoadingSpinner";
import "./Dashboard.scss";
const DashboardScreen = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    } else {
      setIsAuthenticated(false);
      navigate('/login'); 
    }
    setLoading(false); 
  }, [navigate]);

  if (loading) {
    return <LoadingSpinner />; 
  }

  if (!isAuthenticated) {
    return null; 
  }

  return (
    <div className="dashboard-container">
      <div className="content-area">
        <AreaTop />
        <AreaCards />
        <AreaCharts />
        <AreaTable />
      </div>
      <div className="profile-area">
        <UserProfile />
      </div>
    </div>
  );
};

export default DashboardScreen;
