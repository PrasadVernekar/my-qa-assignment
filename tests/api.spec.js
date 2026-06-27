import { test, expect } from '../pages/fixture.js';


test.describe('ReqRes API Tests', () => {
 test('GET /api/users?page=2', async ({ api }) => {
   const response = await api.get('/api/users?page=2');
   expect(response.status()).toBe(200);
   const body = await response.json();
   expect(body).toHaveProperty('data');
   body.data.forEach(user => {
     expect(user).toEqual(
       expect.objectContaining({
         id: expect.any(Number),
         email: expect.any(String),
         first_name: expect.any(String),
         last_name: expect.any(String)
       })
     );
   });


 });


 test('POST /api/users', async ({ api }) => {
   const response = await api.post('/api/users', {
     data: {
       name: 'morpheus',
       job: 'leader'
     }
   });


   expect(response.status()).toBe(201);
   const body = await response.json();
   expect(body).toMatchObject({
     name: 'morpheus',
     job: 'leader'
   });
   expect(body.id).toBeTruthy();
   expect(body.createdAt).toBeTruthy();
 });


});
