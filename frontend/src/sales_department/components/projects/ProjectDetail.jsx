import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';
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

  const handlePrintClick = () => {
    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: "Project Details",
                  bold: true,
                  size: 24,
                }),
              ],
              spacing: {
                after: 400,
              },
            }),
            new Paragraph(`ID: ${project.id}`),
            new Paragraph(`Name: ${project.name}`),
            new Paragraph(`Description: ${project.description}`),
            new Paragraph(`Start Date: ${formatDate(project.start_date)}`),
            new Paragraph(`End Date: ${formatDate(project.end_date)}`),
            new Paragraph(`Status: ${project.status}`),
            new Paragraph(`Client ID: ${project.client_id}`),
          ],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "ProjectDetails.docx");
    });
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
      <button onClick={handlePrintClick}>Print Project Details</button>
    </div>
  );
}

export default ProjectDetail;
