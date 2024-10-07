import React, { useState, useEffect } from 'react';
import './UserManagement.scss';

const UserManagement = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch user management data from API
    // Placeholder for API call
    setUsers([
      { id: 1, username: 'user1', role: 'Admin', status: 'Active' },
      { id: 2, username: 'user2', role: 'User', status: 'Inactive' },
    ]);
  }, []);

  return (
    <div className="user-management">
      <h1>User Management</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Role</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.role}</td>
              <td>{user.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserManagement;
