import React from 'react';
import { Link } from 'react-router-dom';
import './Clients.scss';

const Clients = () => {
  return (
    <div className="clients">
      <h2>Clients Overview</h2>
      <ul className="clients-list">
        <li>
          <Link to="/clients/all">All Clients</Link>
        </li>
        <li>
          <Link to="/clients/add">Add New Client</Link>
        </li>
        <li>
          <Link to="/clients/interactions">Client Interactions</Link>
        </li>
      </ul>
    </div>
  );
};

export default Clients;
