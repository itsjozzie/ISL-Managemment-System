import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './ClientList.scss';

const API_BASE_URL = 'http://localhost:5000/api';

function ClientList() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const fetchClients = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/clients`);
        setClients(response.data);
      } catch (error) {
        console.error('Error fetching clients', error);
      }
    };
    fetchClients();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE_URL}/clients/${id}`);
      setClients(clients.filter(client => client.id !== id));
    } catch (error) {
      console.error('Error deleting client', error);
    }
  };

  return (
    <div className="client-list">
      <h2>Client List</h2>
      <Link to="/clients/add" className="add-client-button">Add New Client</Link>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Address</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map(client => (
            <tr key={client.id}>
              <td>{client.name}</td>
              <td>{client.email}</td>
              <td>{client.phone}</td>
              <td>{client.address}</td>
              <td>{client.status}</td>
              <td>
                <Link to={`/clients/${client.id}`}>View</Link>
                <Link to={`/clients/update/${client.id}`}>Edit</Link>
                <button onClick={() => handleDelete(client.id)}>Delete</button>
                <Link to={`/clients/${client.id}/interactions`}>Interactions</Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ClientList;
