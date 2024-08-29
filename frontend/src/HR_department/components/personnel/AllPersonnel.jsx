import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './AllPersonnel.scss'; 

const API_BASE_URL = 'http://localhost:5000/api';

const AllPersonnel = () => {
  const [personnel, setPersonnel] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/personnel`)
      .then(response => setPersonnel(response.data))
      .catch(error => console.error('Error fetching personnel:', error));
  }, []);

  return (
    <div className="all-personnel">
      <h1>All Personnel</h1>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {personnel.map(person => (
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.email}</td>
              <td>{person.phone}</td>
              <td>{person.position}</td>
              <td>
                <span className={`status-dot ${person.status}`} />
                {person.status.charAt(0).toUpperCase() + person.status.slice(1)}
              </td>
              <td>
                <Link to={`/personnel/details/${person.id}`} className="btn btn-details">Details</Link>
                <Link to={`/personnel/update/${person.id}`} className="btn btn-update">Update</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllPersonnel;
