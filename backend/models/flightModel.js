import pool from '../config/db.js';

export const getAllFlights = async () => {
  const result = await pool.query('SELECT * FROM flights');
  return result.rows;
};

export const getFlightById = async (id) => {
  const result = await pool.query('SELECT * FROM flights WHERE id = $1', [id]);
  return result.rows[0];
};