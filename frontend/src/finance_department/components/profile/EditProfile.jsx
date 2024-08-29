import React, { useState, useEffect } from 'react';
import './EditProfile.scss';

const EditProfile = () => {
  const [profile, setProfile] = useState({ name: '', email: '', role: '' });
  const [status, setStatus] = useState('');

  useEffect(() => {
    // Fetch profile data from API
    // Placeholder for API call
    setProfile({
      name: 'John Doe',
      email: 'john.doe@example.com',
      role: 'Finance Manager',
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Update profile data
    // Placeholder for API call
    setStatus('Profile updated successfully!');
  };

  return (
    <div className="edit-profile">
      <h1>Edit Profile</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={profile.name}
            onChange={(e) => setProfile({ ...profile, name: e.target.value })}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            value={profile.email}
            onChange={(e) => setProfile({ ...profile, email: e.target.value })}
          />
        </label>
        <label>
          Role:
          <input
            type="text"
            value={profile.role}
            onChange={(e) => setProfile({ ...profile, role: e.target.value })}
          />
        </label>
        <button type="submit">Save</button>
        {status && <p>{status}</p>}
      </form>
    </div>
  );
};

export default EditProfile;
