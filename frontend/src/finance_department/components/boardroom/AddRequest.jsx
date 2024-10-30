import React, { useEffect, useState } from 'react';
import './AddRequest.scss';

const AddRequest = () => {
  const [request, setRequest] = useState({
    date: '',
    time: '',
    boardroom: '',
    purpose: '',
    user_id: '',
    department_id: '',
  });

  const [users, setUsers] = useState([]);
  const [departments, setDepartments] = useState([]);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [loadingDepartments, setLoadingDepartments] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch users
    const fetchUsers = async () => {
      try {
        setLoadingUsers(true);
        const response = await fetch('/api/users');
        if (!response.ok) throw new Error('Failed to fetch users');
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError('Error fetching users');
      } finally {
        setLoadingUsers(false);
      }
    };

    // Fetch departments
    const fetchDepartments = async () => {
      try {
        setLoadingDepartments(true);
        const response = await fetch('/api/departments');
        if (!response.ok) throw new Error('Failed to fetch departments');
        const data = await response.json();
        setDepartments(data);
      } catch (err) {
        setError('Error fetching departments');
      } finally {
        setLoadingDepartments(false);
      }
    };

    fetchUsers();
    fetchDepartments();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRequest((prevRequest) => ({ ...prevRequest, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/requests', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(request),
      });
      if (!response.ok) throw new Error('Failed to submit request');
      alert('Request submitted successfully');
      setRequest({
        date: '',
        time: '',
        boardroom: '',
        purpose: '',
        user_id: '',
        department_id: '',
      });
    } catch (err) {
      setError('Error submitting request');
    }
  };

  return (
    <div className="add-request">
      <h2>Add Booking Request</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>Date:
          <input type="date" name="date" value={request.date} onChange={handleChange} required />
        </label>
        <label>Time:
          <input type="time" name="time" value={request.time} onChange={handleChange} required />
        </label>
        <label>User:
          <select name="user_id" value={request.user_id} onChange={handleChange} required>
            <option value="">Select User</option>
            {loadingUsers ? (
              <option>Loading...</option>
            ) : (
              users.map(user => (
                <option key={user.id} value={user.id}>{user.name}</option>
              ))
            )}
          </select>
        </label>
        <label>Department:
          <select name="department_id" value={request.department_id} onChange={handleChange} required>
            <option value="">Select Department</option>
            {loadingDepartments ? (
              <option>Loading...</option>
            ) : (
              departments.map(department => (
                <option key={department.department_id} value={department.department_id}>{department.department_name}</option>
              ))
            )}
          </select>
        </label>
        <label>Boardroom:
          <select name="boardroom" value={request.boardroom} onChange={handleChange} required>
            <option value="">Select Boardroom</option>
            <option value="Room A">Room A</option>
            <option value="Room B">Room B</option>
            {/* Add additional options here if needed */}
          </select>
        </label>
        <label>Purpose:
          <textarea name="purpose" value={request.purpose} onChange={handleChange} required></textarea>
        </label>
        <button type="submit">Submit Request</button>
      </form>
    </div>
  );
};

export default AddRequest;
