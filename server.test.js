const request = require('supertest');

const server = require('./server');

describe('the route handlers', () => {
  describe('post /users', () => {
    test('responds with 201 status', async () => {
      const user = { id: '1', name: 'Jesse' };
      const response = await request(server)
        .post('/users')
        .send(user);

      expect(response.status).toBe(201);
    });
    test('responds with 400 when body is missing data', async () => {
      const user = {};
      const response = await request(server)
        .post('/users')
        .send(user);

      expect(response.status).toBe(400);
    });
  });
  describe('delete /users/:id', () => {
    test('responds with 200 status', async () => {
      const { id, name } = { id: '1', name: 'Jesse' };
      const response = await request(server)
        .delete('/users/:id')
        .send(id);

      expect(response.status).toBe(200);
    });
    test('responds with 404 when user can not be found', async () => {
      const id = 10;
      const response = await request(server)
        .delete('/users/:id')
        .send(id);

      expect(response.status).toBe(404);
    });
  });
});
