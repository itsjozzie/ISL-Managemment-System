import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PersonnelAssignments() {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/assignments'); // Adjust as needed
        setAssignments(response.data);
      } catch (error) {
        console.error('Error fetching assignments', error);
      }
    };
    fetchAssignments();
  }, []);

  return (
    <div>
      <h2>Assignments</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Personnel ID</th>
            <th>Project ID</th>
            <th>Role</th>
            <th>Start Date</th>
            <th>End Date</th>
          </tr>
        </thead>
        <tbody>
          {assignments.map(a => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.personnel_id}</td>
              <td>{a.project_id}</td>
              <td>{a.role}</td>
              <td>{a.start_date}</td>
              <td>{a.end_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PersonnelAssignments;
