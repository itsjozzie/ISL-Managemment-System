import express from 'express';
import { addPersonnel, getAllPersonnel, getPersonnelById, updatePersonnel, deletePersonnel } from '../controllers/personnelController.js';

const router = express.Router();

router.post('/', addPersonnel);
router.get('/', getAllPersonnel);
router.get('/:id', getPersonnelById);
router.put('/:id', updatePersonnel);
router.delete('/:id', deletePersonnel);

export default router;
