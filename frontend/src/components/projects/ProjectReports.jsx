import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Document, Packer, Paragraph, Table, TableCell, TableRow, TextRun } from 'docx';
import { saveAs } from 'file-saver';
import './ProjectReports.scss';

function ProjectReports() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/projects');
        setProjects(response.data);
      } catch (error) {
        setError('Error fetching projects');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const generateWordDocument = async () => {
    try {
      const doc = new Document({
        sections: [
          {
            properties: {},
            children: [
              new Paragraph({
                text: 'Project Reports',
                heading: HeadingLevel.HEADING_1,
                alignment: AlignmentType.CENTER,
              }),
              new Table({
                rows: [
                  new TableRow({
                    children: [
                      new TableCell({ children: [new Paragraph('ID')] }),
                      new TableCell({ children: [new Paragraph('Name')] }),
                      new TableCell({ children: [new Paragraph('Description')] }),
                      new TableCell({ children: [new Paragraph('Start Date')] }),
                      new TableCell({ children: [new Paragraph('End Date')] }),
                      new TableCell({ children: [new Paragraph('Status')] }),
                      new TableCell({ children: [new Paragraph('Client ID')] }),
                    ],
                  }),
                  ...projects.map((project) => new TableRow({
                    children: [
                      new TableCell({ children: [new Paragraph(project.id.toString())] }),
                      new TableCell({ children: [new Paragraph(project.name)] }),
                      new TableCell({ children: [new Paragraph(project.description)] }),
                      new TableCell({ children: [new Paragraph(new Date(project.start_date).toLocaleDateString('en-US'))] }),
                      new TableCell({ children: [new Paragraph(new Date(project.end_date).toLocaleDateString('en-US'))] }),
                      new TableCell({ children: [new Paragraph(project.status)] }),
                      new TableCell({ children: [new Paragraph(project.client_id.toString())] }),
                    ],
                  })),
                ],
              }),
            ],
          },
        ],
      });

      const blob = await Packer.toBlob(doc);
      saveAs(blob, 'project-report.docx');
    } catch (error) {
      console.error('Error generating Word document:', error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="project-reports">
      <h2>Project Reports</h2>
      <button onClick={generateWordDocument}>Generate Word Document</button>
      <div className="report-content">
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
            </tr>
          </thead>
          <tbody>
            {projects.map((project) => (
              <tr key={project.id}>
                <td>{project.id}</td>
                <td>{project.name}</td>
                <td>{project.description}</td>
                <td>{new Date(project.start_date).toLocaleDateString('en-US')}</td>
                <td>{new Date(project.end_date).toLocaleDateString('en-US')}</td>
                <td>{project.status}</td>
                <td>{project.client_id}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ProjectReports;
