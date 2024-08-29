import express from 'express';
import { getAssignmentsByPersonnel, addAssignment, updateAssignment, deleteAssignment } from '../controllers/assignmentsController.js';

const router = express.Router();

router.get('/assignments/personnel/:id', getAssignmentsByPersonnel);
router.post('/assignments', addAssignment);
router.put('/assignments/:id', updateAssignment);
router.delete('/assignments/:id', deleteAssignment);

export default router;
