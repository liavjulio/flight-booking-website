import request from 'supertest';
import createServer from '../app.js';

let server, app;

beforeAll(() => {
  process.env.PORT = 5004;
  ({ app, server } = createServer());
});

afterAll((done) => {
  server.close(() => {
    console.log('Flight Routes server closed');
    done();
  });
});

describe('Flight Routes API', () => {
  it('should return a list of flights', async () => {
    const response = await request(app).get('/api/flights');
    expect(response.statusCode).toBe(200);
    expect(Array.isArray(response.body)).toBe(true);
  });

  it('should return a flight by ID', async () => {
    const flightId = 1;
    const response = await request(app).get(`/api/flights/${flightId}`);
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('id', flightId);
  });

  it('should return 404 if flight not found', async () => {
    const nonExistentId = 9999;
    const response = await request(app).get(`/api/flights/${nonExistentId}`);
    expect(response.statusCode).toBe(404);
    expect(response.body).toHaveProperty('error', 'Flight not found');
  });
});