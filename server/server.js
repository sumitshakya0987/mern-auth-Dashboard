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
    origin: "http://localhost:5173", // your frontend port
    credentials: true, // allow cookies
  }));
app.use(express.json());

// Routes
app.use('/auth', authRoutes);

app.use('/api/dashboard', dashboardRoutes); // << Add this

// Root route
app.get('/', (req, res) => {
  res.send('API is running...');
});

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
