import supertest from 'supertest';
import app from './../index';

const request = supertest(app);

describe('Testing endpoint responses', () => {
  it('gets the root endpoint', (done) => {
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

  it('gets the image endpoint', (done) => {
    (async function () {
      try {
        const response = await request.get('/image?filename=santamonica.jpg');
        expect(response.status).toBe(200);
        done();
      } catch (e) {
        done.fail(e as Error);
      }
    })();
  });
});
