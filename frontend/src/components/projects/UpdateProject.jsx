import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './UpdateProject.scss';

function UpdateProject() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState({
    name: '',
    description: '',
    start_date: '',
    end_date: '',
    status: '',
    client_id: '',
  });

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/projects/${id}`);
        const data = response.data;
        setProject({
          name: data.name,
          description: data.description,
          start_date: data.start_date.split('T')[0], 
          end_date: data.end_date.split('T')[0],     
          status: data.status,
          client_id: data.client_id,
        });
      } catch (error) {
        console.error('Error fetching project', error);
      }
    };

    fetchProject();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProject((prev) => ({ ...prev, [name]: value }));
  };

  const handleUpdateProject = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/projects/${id}`, project);
      alert('Project updated successfully');
      navigate(`/projects/all`); 
    } catch (error) {
      alert(error.response ? error.response.data.message : 'An error occurred');
    }
  };

  return (
    <div className="update-project">
      <h2>Update Project</h2>
      <form onSubmit={handleUpdateProject}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={project.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea
            name="description"
            value={project.description}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Start Date:</label>
          <input
            type="date"
            name="start_date"
            value={project.start_date}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>End Date:</label>
          <input
            type="date"
            name="end_date"
            value={project.end_date}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Status:</label>
          <select
            name="status"
            value={project.status}
            onChange={handleChange}
            required
          >
            <option value="">Select Status</option>
            <option value="Not Started">Not Started</option>
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
            <option value="On Hold">On Hold</option>
          </select>
        </div>
        <div className="form-group">
          <label>Client ID:</label>
          <input
            type="number"
            name="client_id"
            value={project.client_id}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update Project</button>
      </form>
    </div>
  );
}

export default UpdateProject;
