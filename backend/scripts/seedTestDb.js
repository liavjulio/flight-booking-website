import pool from '../config/db.js';

const seedDatabase = async () => {
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

      -- Insert test data
      INSERT INTO flights (destination) VALUES ('New York'), ('Los Angeles');
    `);

    console.log('Database seeded successfully.');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDatabase();