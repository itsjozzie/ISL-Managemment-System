import React, { useState } from 'react';
import axios from 'axios';
import './AddPersonnel.scss';

function AddPersonnel() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [position, setPosition] = useState('');
  const [phone, setPhone] = useState('');
  const [hireDate, setHireDate] = useState('');
  const [status, setStatus] = useState('');

  const handleAddPersonnel = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/personnel', {
        name,
        email,
        position,
        phone,
        hire_date: hireDate,
        status
      });
      alert(response.data.message);
      setName('');
      setEmail('');
      setPosition('');
      setPhone('');
      setHireDate('');
      setStatus('');
    } catch (error) {
      alert(error.response ? error.response.data.message : 'An error occurred');
    }
  };

  return (
    <div className="add-personnel">
      <h2>Add New Personnel</h2>
      <form onSubmit={handleAddPersonnel}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Position:</label>
          <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Hire Date:</label>
          <input type="date" value={hireDate} onChange={(e) => setHireDate(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Status:</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)} required>
            <option value="">Select Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="terminated">Terminated</option>
          </select>
        </div>
        <button type="submit">Add Personnel</button>
      </form>
    </div>
  );
}

export default AddPersonnel;
