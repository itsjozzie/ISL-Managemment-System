import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import personnelRoutes from './routes/personnelRoutes.js';
import authRoutes from './routes/authRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import clientRoutes from './routes/clientsRoutes.js';
import assignmentRoutes from './routes/assignmentRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';    
import requestRoutes from './routes/requestRoutes.js';    
import departmentRoutes from './routes/departmentRoutes.js'; 

const app = express();
const PORT = 5000;  

// Middleware
app.use(cors({ 
  origin: ['http://localhost:3000', 'http://localhost:5173'], 
  credentials: true 
}));
app.use(bodyParser.json());

// Define Routes
app.use('/api/personnel', personnelRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/assignments', assignmentRoutes);
app.use('/api/bookings', bookingRoutes);  
app.use('/api/requests', requestRoutes);  
app.use('/api/departments', departmentRoutes); 

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
