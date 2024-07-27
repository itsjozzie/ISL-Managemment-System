import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './projects.scss';

const ProjectReports = () => {
    const [reports, setReports] = useState([]);

    useEffect(() => {
        const fetchReports = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/projects/reports');
                setReports(response.data);
            } catch (error) {
                console.error('Error fetching project reports:', error);
            }
        };

        fetchReports();
    }, []);

    return (
        <div className="project-reports-container">
            <h2>Project Reports</h2>
            <div className="reports-list">
                {reports.map(report => (
                    <div key={report.id} className="report-item">
                        <h3>{report.name}</h3>
                        <p>{report.description}</p>
                        <p><strong>Start Date:</strong> {report.start_date}</p>
                        <p><strong>End Date:</strong> {report.end_date}</p>
                        <p><strong>Status:</strong> {report.status}</p>
                        <p><strong>Client ID:</strong> {report.client_id}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectReports;
