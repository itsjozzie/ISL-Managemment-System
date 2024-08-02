import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './ProjectDetail.scss';

function ProjectDetail() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US');
  };

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/projects/${id}`);
        setProject(response.data);
      } catch (error) {
        console.error('Error fetching project details', error);
      }
    };
    fetchProject();
  }, [id]);

  const handleUpdateClick = () => {
    navigate(`/projects/update/${id}`);
  };

  if (!project) return <div>Loading...</div>;

  return (
    <div className="project-detail">
      <h2>Project Details</h2>
      <p><strong>ID:</strong> {project.id}</p>
      <p><strong>Name:</strong> {project.name}</p>
      <p><strong>Description:</strong> {project.description}</p>
      <p><strong>Start Date:</strong> {formatDate(project.start_date)}</p>
      <p><strong>End Date:</strong> {formatDate(project.end_date)}</p>
      <p><strong>Status:</strong> {project.status}</p>
      <p><strong>Client ID:</strong> {project.client_id}</p>
      <button onClick={handleUpdateClick}>Update Project</button>
    </div>
  );
}

export default ProjectDetail;
