-- Create flights table
CREATE TABLE IF NOT EXISTS flights (
    id SERIAL PRIMARY KEY,
    destination VARCHAR(255) NOT NULL
);

-- Create bookings table
CREATE TABLE IF NOT EXISTS bookings (
    id SERIAL PRIMARY KEY,
    flight_id INTEGER REFERENCES flights(id),
    passenger_name VARCHAR(255) NOT NULL
);

-- Insert initial data
INSERT INTO flights (destination) VALUES ('New York'), ('Los Angeles');