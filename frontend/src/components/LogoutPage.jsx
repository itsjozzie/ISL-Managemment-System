import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function LogoutPage() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.removeItem('token');

    navigate('/login');
  }, [navigate]);

  return (
    <div className="logout-page">
      <h2>Logging out...</h2>
    </div>
  );
}

export default LogoutPage;
