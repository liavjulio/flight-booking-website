import { createBooking } from '../models/bookingModel.js';
import pool from '../config/db.js'; // Assuming you have a database pool connection

export const addBooking = async (req, res) => {
  try {
    const { flightId, passengerName } = req.body;

    // Validate input
    if (!flightId || !passengerName) {
      return res.status(400).json({ error: 'Missing flightId or passengerName' });
    }

    // Check if the flightId exists in the flights table
    const flightCheck = await pool.query('SELECT * FROM flights WHERE id = $1', [flightId]);
    if (flightCheck.rows.length === 0) {
      return res.status(404).json({ error: `Flight with ID ${flightId} not found` });
    }

    // Create the booking
    const booking = await createBooking(flightId, passengerName);
    res.status(201).json(booking);
  } catch (error) {
    console.error('Error creating booking:', error);
    res.status(500).json({ error: error.message });
  }
};