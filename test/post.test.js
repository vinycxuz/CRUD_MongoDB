const request = require('supertest');
const app = require('./index');

describe('Love Endpoint', () => {
  it('should create a new love entry', async () => {
    const response = await request(app)
      .post('/love')
      .send({ message: 'I love GitHub Copilot' });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('I love GitHub Copilot');
  });

  it('should get all love entries', async () => {
    const response = await request(app).get('/love');

    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });
});const request = require('supertest');
const app = require('./index');

describe('Love Endpoint', () => {
  it('should create a new love entry', async () => {
    const response = await request(app)
      .post('/love')
      .send({ message: 'I love GitHub Copilot' });

    expect(response.status).toBe(200);
    expect(response.body.message).toBe('I love GitHub Copilot');
  });

  it('should get all love entries', async () => {
    const response = await request(app).get('/love');

    expect(response.status).toBe(200);
    expect(response.body.length).toBeGreaterThan(0);
  });
});