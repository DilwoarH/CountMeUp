var request = require('supertest');

describe('RegisterController', function() {

    describe('/register successful test', function() {
        it('should redirect to /register', function (done) {

            var randomString = Math.random().toString(36).substring(3);
            var user = {
                name:       `Test_${randomString}`,
                email:      `testemail_${randomString}@test.com`,
                password:   `fdsfds324432fsfds${randomString}dsadsadsads432432234adasdas`
            };

            request(sails.hooks.http.app)
            .post('/register')
            .send({ 
                name: user.name, 
                email: user.email,
                password: user.password
            })
            .expect(200)
            .expect('Content-Type', /json/)
            .end(done);
        });
    });

    describe('/register failure test', function() {
        var randomString = Math.random().toString(36).substring(3);
        var user = {
            name:       `Test_${randomString}`,
            email:      `testemail_${randomString}@test.com`,
            password:   `fdsfds324432fsfds${randomString}dsadsadsads432432234adasdas`
        };

        it('should redirect to /register and return 200 response code', function (done) {
            request(sails.hooks.http.app)
            .post('/register')
            .send({ 
                name: user.name, 
                email: user.email,
                password: user.password
            })
            .expect(200)
            .expect('Content-Type', /json/)
            .end(done);
        });

        it('should redirect to /register and return 403 response code', function (done) {
            request(sails.hooks.http.app)
            .post('/register')
            .send({ 
                name: user.name, 
                email: user.email,
                password: user.password
            })
            .expect(403)
            .expect('Content-Type', /json/)
            .end(done);
        });
    });

});