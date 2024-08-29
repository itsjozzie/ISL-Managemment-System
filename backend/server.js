import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import personnelRoutes from './routes/personnelRoutes.js';
import authRoutes from './routes/authRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import clientRoutes from './routes/clientsRoutes.js';
import assignmentRoutes from './routes/assignmentRoutes.js';
import { authenticateToken } from './middleware/authMiddleware.js'; // Import the middleware

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// Apply authentication middleware globally if required
// app.use(authenticateToken); // Uncomment if you want all routes to require authentication

// Routes
app.use('/api/personnel', authenticateToken, personnelRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/projects', authenticateToken, projectRoutes);
app.use('/api/clients', authenticateToken, clientRoutes);
app.use('/api/assignments', authenticateToken, assignmentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
