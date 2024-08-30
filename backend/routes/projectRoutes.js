import { Router } from 'express';
import { addProject, getAllProjects, getProjectById, updateProject } from '../controllers/projectController.js';

const router = Router();

router.post('/', addProject);
router.get('/', getAllProjects);
router.get('/:id', getProjectById);
router.put('/:id', updateProject);

export default router;
