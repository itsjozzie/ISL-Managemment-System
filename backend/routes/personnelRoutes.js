import { Router } from 'express';
import { addPersonnel, getAllPersonnel, getPersonnelById } from '../controllers/personnelController.js';

const router = Router();

router.post('/', addPersonnel);
router.get('/', getAllPersonnel);
router.get('/:id', getPersonnelById);

export default router;
