import db from '../config/db.js';

export const addClient = (req, res) => {
  const { name, email, phone, address, status } = req.body;
  const query = 'INSERT INTO clients (name, email, phone, address, status) VALUES (?, ?, ?, ?, ?)';
  db.query(query, [name, email, phone, address, status], (err, results) => {
    if (err) return res.status(500).json({ message: 'Error adding client' });
    res.status(201).json({ message: 'Client added successfully' });
  });
};


export const getAllClients = (req, res) => {
  db.query('SELECT * FROM clients', (err, results) => {
    if (err) return res.status(500).json({ message: 'Error fetching clients' });
    res.status(200).json(results);
  });
};


export const getClientById = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM clients WHERE id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ message: 'Error fetching client' });
    if (results.length === 0) return res.status(404).json({ message: 'Client not found' });
    res.status(200).json(results[0]);
  });
};


export const updateClient = (req, res) => {
  const { id } = req.params;
  const { name, email, phone, address, status } = req.body;
  const query = 'UPDATE clients SET name = ?, email = ?, phone = ?, address = ?, status = ? WHERE id = ?';
  db.query(query, [name, email, phone, address, status, id], (err) => {
    if (err) return res.status(500).json({ message: 'Error updating client' });
    res.status(200).json({ message: 'Client updated successfully' });
  });
};


export const deleteClient = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM clients WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json({ message: 'Error deleting client' });
    res.status(200).json({ message: 'Client deleted successfully' });
  });
};


export const getClientInteractions = (req, res) => {
  const { id } = req.params;
  db.query('SELECT * FROM client_interactions WHERE client_id = ?', [id], (err, results) => {
    if (err) return res.status(500).json({ message: 'Error fetching interactions' });
    res.status(200).json(results);
  });
};

export const addClientInteraction = (req, res) => {
  const { client_id, interaction_date, details } = req.body;
  const query = 'INSERT INTO client_interactions (client_id, interaction_date, details) VALUES (?, ?, ?)';
  db.query(query, [client_id, interaction_date, details], (err, results) => {
    if (err) return res.status(500).json({ message: 'Error adding interaction' });
    res.status(201).json({ message: 'Interaction added successfully' });
  });
};

export const updateClientInteraction = (req, res) => {
  const { id } = req.params;
  const { interaction_date, details } = req.body;
  const query = 'UPDATE client_interactions SET interaction_date = ?, details = ? WHERE id = ?';
  db.query(query, [interaction_date, details, id], (err) => {
    if (err) return res.status(500).json({ message: 'Error updating interaction' });
    res.status(200).json({ message: 'Interaction updated successfully' });
  });
};


export const deleteClientInteraction = (req, res) => {
  const { id } = req.params;
  db.query('DELETE FROM client_interactions WHERE id = ?', [id], (err) => {
    if (err) return res.status(500).json({ message: 'Error deleting interaction' });
    res.status(200).json({ message: 'Interaction deleted successfully' });
  });
};
