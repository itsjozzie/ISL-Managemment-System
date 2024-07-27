import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './AllPersonnel.scss';

function AllPersonnel() {
  const [personnel, setPersonnel] = useState([]);

  useEffect(() => {
    const fetchPersonnel = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/personnel');
        setPersonnel(response.data);
      } catch (error) {
        console.error('Error fetching personnel', error);
      }
    };
    fetchPersonnel();
  }, []);

  return (
    <div>
      <h2>All Personnel</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Position</th>
            <th>Phone</th>
            <th>Hire Date</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {personnel.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.email}</td>
              <td>{p.position}</td>
              <td>{p.phone}</td>
              <td>{p.hire_date}</td>
              <td>{p.status}</td>
              <td>
                <Link to={`/personnel/${p.id}`}>Details</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AllPersonnel;
