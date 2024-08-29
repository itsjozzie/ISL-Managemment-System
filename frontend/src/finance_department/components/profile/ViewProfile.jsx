import React, { useState, useEffect } from 'react';
import './ViewProfile.scss';

const ViewProfile = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    // Fetch profile data from API
    // Placeholder for API call
    setProfile({
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Finance Manager',
    });
  }, []);

  return (
    <div className="view-profile">
      <h1>View Profile</h1>
      <div className="profile-details">
        <p>Name: {profile.name}</p>
        <p>Email: {profile.email}</p>
        <p>Role: {profile.role}</p>
      </div>
    </div>
  );
};

export default ViewProfile;
