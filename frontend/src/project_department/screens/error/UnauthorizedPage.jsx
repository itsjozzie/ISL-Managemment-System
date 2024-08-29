import React from 'react';
import { Link } from 'react-router-dom';

function UnauthorizedPage() {
  return (
    <div className="unauthorized-page">
      <h1>403 - Unauthorized</h1>
      <p>You do not have permission to access this page.</p>
      <Link to="/">Go to Home</Link>
    </div>
  );
}

export default UnauthorizedPage;
