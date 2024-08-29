import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import './UpdateClient.scss';

const API_BASE_URL = 'http://localhost:5000/api';

function UpdateClient() {
  const { id } = useParams();
  const [client, setClient] = useState(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [status, setStatus] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchClient = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/clients/${id}`);
        setClient(response.data);
        setName(response.data.name);
        setEmail(response.data.email);
        setPhone(response.data.phone);
        setAddress(response.data.address);
        setStatus(response.data.status);
      } catch (error) {
        console.error('Error fetching client details', error);
      }
    };
    fetchClient();
  }, [id]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(`${API_BASE_URL}/clients/${id}`, { name, email, phone, address, status });
      navigate('/clients');
    } catch (error) {
      console.error('Error updating client', error);
    }
  };

  if (!client) return <div>Loading...</div>;

  return (
    <div className="update-client">
      <h2>Update Client</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </label>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </label>
        <label>
          Phone:
          <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </label>
        <label>
          Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
        </label>
        <label>
          Status:
          <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} required />
        </label>
        <button type="submit">Update Client</button>
      </form>
    </div>
  );
}

export default UpdateClient;
