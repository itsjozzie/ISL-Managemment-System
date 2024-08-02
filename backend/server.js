import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes.js';
import projectRoutes from './routes/projectRoutes.js';
import personnelRoutes from './routes/personnelRoutes.js';

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/personnel', personnelRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
