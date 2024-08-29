import express from 'express';
import {
  addClient,
  getAllClients,
  getClientById,
  updateClient,
  deleteClient,
  getClientInteractions,
  addClientInteraction,
  updateClientInteraction,
  deleteClientInteraction
} from '../controllers/clientsController.js';

const router = express.Router();

router.post('/clients', addClient);
router.get('/clients', getAllClients);
router.get('/clients/:id', getClientById);
router.put('/clients/:id', updateClient);
router.delete('/clients/:id', deleteClient);

router.get('/clients/:id/interactions', getClientInteractions);
router.post('/clients/interactions', addClientInteraction);
router.put('/clients/interactions/:id', updateClientInteraction);
router.delete('/clients/interactions/:id', deleteClientInteraction);

export default router;
