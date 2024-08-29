import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './UpdatePersonnel.scss';

const API_BASE_URL = 'http://localhost:5000/api';

const UpdatePersonnel = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [personnel, setPersonnel] = useState({
    name: '',
    email: '',
    position: '',
    phone: '',
    hire_date: '',
    status: 'active',
  });

  useEffect(() => {
    const fetchPersonnel = async () => {
      try {
        const token = localStorage.getItem('token'); // or wherever you store the token
        const response = await axios.get(`${API_BASE_URL}/personnel/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setPersonnel(response.data);
      } catch (error) {
        console.error('Error fetching personnel details:', error);
      }
    };

    fetchPersonnel();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonnel((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token'); // or wherever you store the token
      await axios.put(`${API_BASE_URL}/personnel/${id}`, personnel, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      navigate('/personnel/all');
    } catch (error) {
      console.error('Error updating personnel:', error);
    }
  };

  return (
    <div className="update-personnel">
      <h1>Update Personnel</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" name="name" value={personnel.name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" value={personnel.email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Position:</label>
          <input type="text" name="position" value={personnel.position} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Phone:</label>
          <input type="text" name="phone" value={personnel.phone} onChange={handleChange} />
        </div>
        <div className="form-group">
          <label>Hire Date:</label>
          <input
            type="date"
            name="hire_date"
            value={personnel.hire_date ? new Date(personnel.hire_date).toISOString().split('T')[0] : ''}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Status:</label>
          <select name="status" value={personnel.status} onChange={handleChange} required>
            <option value="">Select Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
            <option value="terminated">Terminated</option>
          </select>
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default UpdatePersonnel;
