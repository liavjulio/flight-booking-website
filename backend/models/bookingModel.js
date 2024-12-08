import pool from '../config/db.js';

export const createBooking = async (flightId, passengerName) => {
  const result = await pool.query(
    'INSERT INTO bookings (flight_id, passenger_name) VALUES ($1, $2) RETURNING *',
    [flightId, passengerName]
  );
  return result.rows[0];
};