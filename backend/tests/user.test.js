const axios = require('axios');


describe('GET @ /users endpoint', () => {
    it('should return an users array and return status code 200', async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/user/', );
        expect(res.status).toEqual(200);
        expect(typeof res.data).toEqual('object');
      } catch (error) {
        console.log(error);
      }
    });
  });
  
  describe('POST @ /user/register endpoint', () => {
    it('should create an account', async () => {
      try {
        const res = await axios.post(
          'http://localhost:5000/api/user/create',
          {
            name: "sTest 00002",
            email: "stest00002@gmail.com",
            userType: "student",
            password: "stest00002"
          }
        );
  
        expect(res.status).toEqual(200);
      } catch (error) {
        console.log(error);
      }
    });
  });
  

  describe('POST @ /user/validate endpoint', () => {
    it('should login as admin', async () => {
      try {
        const res = await axios.post('http://localhost:5000/api/user/validate', {
          email: 'admin@gmail.com',
          password: 'a',
        });
        expect(res.status).toEqual(200);
      } catch (error) {
        console.log(error);
      }
    });
  });
  
  
  describe('GET @ /user/:id endpoint', () => {
    it('should return user details object', async () => {
      try {
        const res = await axios.get(`http://localhost:5000/api/user/645d535c2440793d448deafe`);
  
        expect(res.status).toEqual(200);
        expect(typeof res.data).toEqual('object');
      } catch (error) {
        console.log(error);
      }
    });
  });
