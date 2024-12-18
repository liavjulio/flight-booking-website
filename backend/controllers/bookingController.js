import pool from '../config/db.js';

export const getBookings = async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM bookings');
    res.status(200).json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addBooking = async (req, res) => {
  const { flightId, passengerName } = req.body;

  if (!flightId || !passengerName) {
    return res.status(400).json({ error: 'Missing flightId or passengerName' });
  }

  try {
    const booking = await createBooking(flightId, passengerName);
    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};