import pkg from 'pg';
import dotenv from 'dotenv';

// Load the appropriate .env file based on the environment
dotenv.config({ path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env' });

const { Pool } = pkg;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT || 5432,
});
pool.connect()
  .then(() => console.log('Database connected successfully'))
  .catch((err) => console.error('Database connection error:', err));
export default pool;
