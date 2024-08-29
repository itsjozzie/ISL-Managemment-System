import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import './ClientDetail.scss';

const API_BASE_URL = 'http://localhost:5000/api';

function ClientDetail() {
  const { id } = useParams();
  const [client, setClient] = useState(null);

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/clients/${id}`);
        setClient(response.data);
      } catch (error) {
        console.error('Error fetching client details', error);
      }
    };
    fetchClient();
  }, [id]);

  if (!client) return <div>Loading...</div>;

  return (
    <div className="client-detail">
      <h2>Client Details</h2>
      <p><strong>Name:</strong> {client.name}</p>
      <p><strong>Email:</strong> {client.email}</p>
      <p><strong>Phone:</strong> {client.phone}</p>
      <p><strong>Address:</strong> {client.address}</p>
      <p><strong>Status:</strong> {client.status}</p>
      <Link to={`/clients/update/${client.id}`} className="edit-button">Edit</Link>
      <Link to={`/clients/${client.id}/interactions`} className="interactions-button">View Interactions</Link>
    </div>
  );
}

export default ClientDetail;
