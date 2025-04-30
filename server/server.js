// server.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import dashboardRoutes from './routes/dashboard.js';


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// DB connection
connectDB();

// Middleware
app.use(cors({
    origin: 'https://mern-auth-dashboard-1.onrender.com', //frontend port
    credentials: true,
  }));
app.use(express.json());

// Routes
app.use('/auth', authRoutes);

app.use('/api/dashboard', dashboardRoutes); 

// Root route
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
