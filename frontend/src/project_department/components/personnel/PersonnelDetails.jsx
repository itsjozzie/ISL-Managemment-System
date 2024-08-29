import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { Document, Packer, Paragraph, TextRun } from 'docx';
import { saveAs } from 'file-saver';
import './PersonnelDetail.scss';

const API_BASE_URL = 'http://localhost:5000/api';

function PersonnelDetail() {
  const { id } = useParams();
  const [personnel, setPersonnel] = useState(null);
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US');
  };

  useEffect(() => {
    const fetchPersonnel = async () => {
      try {
        const token = localStorage.getItem('token'); // or wherever you store the token
        const response = await axios.get(`${API_BASE_URL}/personnel/${id}`, {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        });
        setPersonnel(response.data);
      } catch (error) {
        console.error('Error fetching personnel details', error);
      }
    };
    fetchPersonnel();
  }, [id]);

  const handleUpdateClick = () => {
    navigate(`/personnel/update/${id}`);
  };

  const handlePrintClick = () => {
    if (!personnel) return;

    const doc = new Document({
      sections: [
        {
          properties: {},
          children: [
            new Paragraph({
              children: [
                new TextRun({
                  text: "Personnel Details",
                  bold: true,
                  size: 24,
                }),
              ],
              spacing: {
                after: 400,
              },
            }),
            new Paragraph(`Name: ${personnel.name}`),
            new Paragraph(`Email: ${personnel.email}`),
            new Paragraph(`Phone: ${personnel.phone}`),
            new Paragraph(`Position: ${personnel.position}`),
            new Paragraph(`Hire Date: ${formatDate(personnel.hire_date)}`),
            new Paragraph(`Status: ${personnel.status.charAt(0).toUpperCase() + personnel.status.slice(1)}`),
          ],
        },
      ],
    });

    Packer.toBlob(doc).then((blob) => {
      saveAs(blob, "PersonnelDetails.docx");
    });
  };

  if (!personnel) return <div>Loading...</div>;

  return (
    <div className="personnel-detail">
      <h2>Personnel Details</h2>
      <p><strong>Name:</strong> {personnel.name}</p>
      <p><strong>Email:</strong> {personnel.email}</p>
      <p><strong>Phone:</strong> {personnel.phone}</p>
      <p><strong>Position:</strong> {personnel.position}</p>
      <p><strong>Hire Date:</strong> {formatDate(personnel.hire_date)}</p>
      <p><strong>Status:</strong> {personnel.status.charAt(0).toUpperCase() + personnel.status.slice(1)}</p>
      <div className="button-container">
        <button onClick={handleUpdateClick}>Update Personnel</button>
        <button onClick={handlePrintClick}>Print Personnel Details</button>
      </div>
    </div>
  );
}

export default PersonnelDetail;
