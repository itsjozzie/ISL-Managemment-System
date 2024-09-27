import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import personnelRoutes from './routes/personnelRoutes.js';
import authRoutes from './routes/authRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import clientRoutes from './routes/clientsRoutes.js';
import assignmentRoutes from './routes/assignmentRoutes.js';
import { authenticateToken } from './middleware/authMiddleware.js';

const app = express();
const PORT = 5000;  // Hardcode port number

// Update CORS configuration to allow requests from both origins
app.use(cors({ 
  origin: ['http://localhost:3000', 'http://localhost:5173'], // Allow both origins
  credentials: true 
}));
app.use(bodyParser.json());

// Routes
app.use('/api/personnel', authenticateToken, personnelRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/projects', authenticateToken, projectRoutes);
app.use('/api/clients', authenticateToken, clientRoutes);
app.use('/api/assignments', authenticateToken, assignmentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
