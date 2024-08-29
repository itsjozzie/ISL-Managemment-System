import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import './ClientInteractions.scss';

const API_BASE_URL = 'http://localhost:5000/api';

function ClientInteractions() {
  const { id } = useParams();
  const [interactions, setInteractions] = useState([]);
  const [interactionDate, setInteractionDate] = useState('');
  const [details, setDetails] = useState('');

  useEffect(() => {
    const fetchInteractions = async () => {
      try {
        const response = await axios.get(`${API_BASE_URL}/clients/${id}/interactions`);
        setInteractions(response.data);
      } catch (error) {
        console.error('Error fetching interactions', error);
      }
    };
    fetchInteractions();
  }, [id]);

  const handleAddInteraction = async () => {
    try {
      await axios.post(`${API_BASE_URL}/clients/interactions`, { client_id: id, interaction_date: interactionDate, details });
      setInteractions([...interactions, { interaction_date: interactionDate, details }]);
      setInteractionDate('');
      setDetails('');
    } catch (error) {
      console.error('Error adding interaction', error);
    }
  };

  return (
    <div className="client-interactions">
      <h2>Client Interactions</h2>
      <h3>Add New Interaction</h3>
      <input type="date" value={interactionDate} onChange={(e) => setInteractionDate(e.target.value)} />
      <textarea value={details} onChange={(e) => setDetails(e.target.value)} placeholder="Interaction details" />
      <button onClick={handleAddInteraction}>Add Interaction</button>

      <h3>Previous Interactions</h3>
      <ul>
        {interactions.map(interaction => (
          <li key={interaction.id}>
            <p><strong>Date:</strong> {interaction.interaction_date}</p>
            <p><strong>Details:</strong> {interaction.details}</p>
          </li>
        ))}
      </ul>
      <Link to={`/clients/${id}`} className="back-button">Back to Client Details</Link>
    </div>
  );
}

export default ClientInteractions;
