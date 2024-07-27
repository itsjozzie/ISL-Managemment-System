import { Router } from 'express';
import { addProject, getAllProjects, getProjectById } from '../controllers/projectController.js';

const router = Router();

router.post('/', addProject);
router.get('/', getAllProjects);
router.get('/:id', getProjectById);


export default router;
