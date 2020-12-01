const request = require('supertest');
const  apiRequest = request('http://localhost:8000');
 

describe('test the ascii api', () => {
    test('should return statusCode 200', async () => {
        const response = await apiRequest.get('/ascii?symbol=SPOT&since=2020-07-16&price=high&until=2020-07-30');
        expect(response.statusCode).toBe(200);
    }); 

    test('should return statusCode 400 for  Bad Request', async () => {
        const response = await apiRequest.get('/ascii');
        expect(response.statusCode).toBe(400);
    }); 
});
