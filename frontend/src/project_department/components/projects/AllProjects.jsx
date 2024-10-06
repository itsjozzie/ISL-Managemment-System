import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './AllProjects.scss';

function AllProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US');
  };

  const getStatusClass = (status) => {
    switch (status.toLowerCase()) {
      case 'completed':
        return 'status-dot completed';
      case 'in progress':
        return 'status-dot in-progress';
      case 'pending':
        return 'status-dot pending';
      case 'on-hold':
        return 'status-dot on-hold';
      default:
        return 'status-dot not-started';
    }
  };

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/projects');
        setProjects(response.data);
      } catch (err) {
        setError(err.response?.data?.message || err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  return (
    <div className="projects-container">
      <h2 className="heading">All Projects</h2>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Description</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Status</th>
              <th>Client ID</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {projects.map((p) => (
              <tr key={p.id}>
                <td>{p.id}</td>
                <td>{p.name}</td>
                <td>{p.description}</td>
                <td>{formatDate(p.start_date)}</td>
                <td>{formatDate(p.end_date)}</td>
                <td>
                  <span className={getStatusClass(p.status)}></span> {p.status}
                </td>
                <td>{p.client_id}</td>
                <td>
                  <Link to={`/projects/${p.id}`} className="btn btn-details">
                    Details
                  </Link>
                  <Link to={`/projects/update/${p.id}`} className="btn btn-update">
                    Update
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllProjects;
