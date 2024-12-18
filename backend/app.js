import express from 'express';
import cors from 'cors';
import flightRoutes from './routes/flightRoutes.js';
import bookingRoutes from './routes/bookingRoutes.js';
import dotenv from 'dotenv';

dotenv.config();

const createServer = () => {
  const app = express();
  const PORT = process.env.PORT || 5004;

  app.use(cors());
  app.use(express.json());

  app.use('/api/flights', flightRoutes);
  app.use('/api/bookings', bookingRoutes);

  const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

  return { app, server };
};

export default createServer;