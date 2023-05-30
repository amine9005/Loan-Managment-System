import app from "../app";
import request from 'supertest'

describe('As User ', () => {

    describe('GET unknown route', () => {
        it('should return 404', (done) => {
            request(app)
              .get('/unknown')
              .expect(404, done);
        })


        test('should return a json format', async () => {
            const response = await request(app).get('/unknown');
            expect(response.type).toBe('application/json');
        })

        
    })

})