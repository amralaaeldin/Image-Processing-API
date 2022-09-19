import supertest from 'supertest';
import app from './../index';

const request = supertest(app);

describe('Testing endpoint responses', () => {
  it('gets the api endpoint', (done) => {
    (async function () {
      try {
        const response = await request.get('/');
        expect(response.status).toBe(200);
        done();
      } catch (e) {
        done.fail(e as Error);
      }
    })();
  });
});
