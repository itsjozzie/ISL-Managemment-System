import React, { useState } from 'react';
import axios from 'axios';
import './AddNewProject.scss';

function AddNewProject() {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [status, setStatus] = useState('');
  const [clientId, setClientId] = useState('');

  const handleAddProject = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/projects', {
        name,
        description,
        start_date: startDate,
        end_date: endDate,
        status,
        client_id: clientId
      });
      alert(response.data.message);
      setName('');
      setDescription('');
      setStartDate('');
      setEndDate('');
      setStatus('');
      setClientId('');
    } catch (error) {
      alert(error.response ? error.response.data.message : 'An error occurred');
    }
  };

  return (
    <div className="add-project">
      <h2>Add New Project</h2>
      <form onSubmit={handleAddProject}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Start Date:</label>
          <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>End Date:</label>
          <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Status:</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)} required>
            <option value="">Select Status</option>
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="On Hold">On Hold</option>
          </select>
        </div>
        <div className="form-group">
          <label>Client ID:</label>
          <input type="number" value={clientId} onChange={(e) => setClientId(e.target.value)} />
        </div>
        <button type="submit">Add Project</button>
      </form>
    </div>
  );
}

export default AddNewProject;
