import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Assignments.scss';

const API_BASE_URL = 'http://localhost:5000/api';

function Assignments() {
  const [assignments, setAssignments] = useState([]);
  const [newAssignment, setNewAssignment] = useState({
    personnel_id: '',
    project_id: '',
    assignment_date: '',
    status: 'not started'
  });

  useEffect(() => {
    const fetchAssignments = async () => {
      try {
        const token = localStorage.getItem('token'); // or wherever you store the token
        const response = await axios.get(`${API_BASE_URL}/assignments`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setAssignments(response.data);
      } catch (error) {
        console.error('Error fetching assignments', error);
      }
    };
    fetchAssignments();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewAssignment((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddAssignment = async () => {
    try {
      const token = localStorage.getItem('token'); // or wherever you store the token
      await axios.post(`${API_BASE_URL}/assignments`, newAssignment, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setNewAssignment({
        personnel_id: '',
        project_id: '',
        assignment_date: '',
        status: 'not started'
      });
      const response = await axios.get(`${API_BASE_URL}/assignments`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      setAssignments(response.data);
    } catch (error) {
      console.error('Error adding assignment', error);
    }
  };

  return (
    <div className="assignments">
      <h3>Assignments</h3>
      <ul>
        {assignments.map((assignment) => (
          <li key={assignment.id}>
            <div className="details">
              <span>Personnel ID: {assignment.personnel_id}</span>
              <span>Project ID: {assignment.project_id}</span>
              <span>Assignment Date: {new Date(assignment.assignment_date).toLocaleDateString()}</span>
              <span>Status: {assignment.status}</span>
            </div>
          </li>
        ))}
      </ul>
      <div className="add-assignment">
        <h4>Add New Assignment</h4>
        <input
          type="number"
          name="personnel_id"
          value={newAssignment.personnel_id}
          onChange={handleInputChange}
          placeholder="Personnel ID"
        />
        <input
          type="number"
          name="project_id"
          value={newAssignment.project_id}
          onChange={handleInputChange}
          placeholder="Project ID"
        />
        <input
          type="date"
          name="assignment_date"
          value={newAssignment.assignment_date}
          onChange={handleInputChange}
        />
        <select
          name="status"
          value={newAssignment.status}
          onChange={handleInputChange}
        >
          <option value="not started">Not Started</option>
          <option value="in progress">In Progress</option>
          <option value="completed">Completed</option>
        </select>
        <button onClick={handleAddAssignment}>Add Assignment</button>
      </div>
    </div>
  );
}

export default Assignments;
