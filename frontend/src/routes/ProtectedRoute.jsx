import { Navigate, useLocation } from "react-router-dom";

function ProtectedRoute({ element: Component, allowedRoles, ...rest }) {
  const isAuthenticated = !!localStorage.getItem('token');
  const userRole = localStorage.getItem('role'); // Assuming role is stored in localStorage
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" />;
  }

  return <Component {...rest} />;
}

export default ProtectedRoute;
