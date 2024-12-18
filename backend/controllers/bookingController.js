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
  try {
    const { flightId, passengerName } = req.body;
    const result = await pool.query(
      'INSERT INTO bookings (flight_id, passenger_name) VALUES ($1, $2) RETURNING *',
      [flightId, passengerName]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};