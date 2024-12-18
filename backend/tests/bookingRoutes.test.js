import request from 'supertest';
import createServer from '../app.js';

let server, app;

beforeAll(() => {
  process.env.PORT = 5005;
  ({ app, server } = createServer());
});

afterAll((done) => {
  server.close(() => {
    console.log('Booking Routes server closed');
    done();
  });
});

describe('Booking Routes API', () => {
  it('should create a new booking', async () => {
    const newBooking = {
      flightId: 1,
      passengerName: 'John Doe',
    };

    const response = await request(app).post('/api/bookings').send(newBooking);
    expect(response.statusCode).toBe(201);
    expect(response.body).toHaveProperty('id');
    expect(response.body).toHaveProperty('flight_id', newBooking.flightId);
    expect(response.body).toHaveProperty('passenger_name', newBooking.passengerName);
  });

  it('should return 400 for missing flightId or passengerName', async () => {
    const invalidBooking = {
      passengerName: '',
    };

    const response = await request(app).post('/api/bookings').send(invalidBooking);
    expect(response.statusCode).toBe(400);
    expect(response.body).toHaveProperty('error');
  });
});