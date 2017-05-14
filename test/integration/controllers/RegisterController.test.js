var request = require('supertest');

describe('RegisterController', function() {

  describe('/register', function() {
    it('should redirect to /register', function (done) {
      request(sails.hooks.http.app)
        .post('/register')
        .send({ name: 'test', email: 'test@test.com' })
        .expect(200)
        .expect('location','/register/successful', done);
    });
  });

});