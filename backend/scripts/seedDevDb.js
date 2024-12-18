import pool from '../config/db.js';
import dotenv from 'dotenv';

// Load the development environment configuration
dotenv.config({ path: '.env' });

const seedDevDatabase = async () => {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS flights (
        id SERIAL PRIMARY KEY,
        destination VARCHAR(255) NOT NULL
      );

      CREATE TABLE IF NOT EXISTS bookings (
        id SERIAL PRIMARY KEY,
        flight_id INTEGER REFERENCES flights(id),
        passenger_name VARCHAR(255) NOT NULL
      );

      -- Insert development data
      INSERT INTO flights (destination) VALUES ('New York'), ('Los Angeles');
      INSERT INTO bookings (flight_id, passenger_name) VALUES (1, 'Alice Smith'), (2, 'Bob Johnson');
    `);

    console.log('Development database seeded successfully.');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding development database:', error);
    process.exit(1);
  }
};

seedDevDatabase();