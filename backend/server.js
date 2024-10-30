import express from 'express';
import cors from 'cors';
import personnelRoutes from './routes/personnelRoutes.js';
import authRoutes from './routes/authRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import clientRoutes from './routes/clientsRoutes.js';
import assignmentRoutes from './routes/assignmentRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import requestRoutes from './routes/requestRoutes.js';
import departmentRoutes from './routes/departmentRoutes.js';
import userRoutes from './routes/userRoutes.js';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(
  cors({
    origin: ['http://localhost:3000', 'http://localhost:5173'], // Frontend origins
    credentials: true,
  })
);
app.use(express.json());

// Route Definitions
app.use('/api/personnel', personnelRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/assignments', assignmentRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/requests', requestRoutes);
app.use('/api/departments', departmentRoutes);
app.use('/api/users', userRoutes);

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({ message: 'API is running smoothly!' });
});

// Default Route Handler for Undefined Routes
app.use((req, res) => {
  res.status(404).json({ message: 'Endpoint not found' });
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Server error', error: err.message });
});

// Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
