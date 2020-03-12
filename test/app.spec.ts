import supertest from 'supertest';
import app from '../src/app';

describe('app', () => {
  it('should send 200 when calling test', async () => {
    const response = await supertest(app).get('/test');
    expect(response.status).toBe(200);
  });
});
