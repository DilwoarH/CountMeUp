var request = require('supertest');

describe('RegisterController', function() {

    describe('/register successful test', function() {
        it('should redirect to /register', function (done) {

            var randomString = Math.random().toString(36).substring(3);

            request(sails.hooks.http.app)
            .post('/register')
            .send({ 
                name: `Test_${randomString}`, 
                email: `testemail_${randomString}@test.com` 
            })
            .expect(200)
            .expect('Content-Type', /json/)
            .expect('location','/register', done);
        });
    });

    describe('/register failure test', function() {
        var randomString = Math.random().toString(36).substring(3);

        it('should redirect to /register and return 200 response code', function (done) {
            request(sails.hooks.http.app)
            .post('/register')
            .send({ 
                name: `Test_${randomString}`, 
                email: `testemail_${randomString}@test.com` 
            })
            .expect(200)
            .expect('Content-Type', /json/)
            .expect('location','/register', done);
        });

        it('should redirect to /register and return 403 response code', function (done) {
            request(sails.hooks.http.app)
            .post('/register')
            .send({ 
                name: `Test_${randomString}`, 
                email: `testemail_${randomString}@test.com` 
            })
            .expect(403)
            .expect('Content-Type', /json/)
            .expect('location','/register', done);
        });
    });

});