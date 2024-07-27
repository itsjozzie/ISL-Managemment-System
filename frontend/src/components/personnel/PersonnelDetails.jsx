import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function PersonnelDetails() {
  const { id } = useParams();
  const [personnel, setPersonnel] = useState(null);

  useEffect(() => {
    const fetchPersonnel = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/personnel/${id}`);
        setPersonnel(response.data);
      } catch (error) {
        console.error('Error fetching personnel details', error);
      }
    };
    fetchPersonnel();
  }, [id]);

  if (!personnel) return <div>Loading...</div>;

  return (
    <div>
      <h2>Personnel Details</h2>
      <p>ID: {personnel.id}</p>
      <p>Name: {personnel.name}</p>
      <p>Email: {personnel.email}</p>
      <p>Position: {personnel.position}</p>
      <p>Phone: {personnel.phone}</p>
      <p>Hire Date: {personnel.hire_date}</p>
      <p>Status: {personnel.status}</p>
    </div>
  );
}

export default PersonnelDetails;
