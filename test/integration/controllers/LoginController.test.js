const request = require('supertest');

describe('LoginController', function() {

    describe('/vote successful test', function() {
        
        var randomString = Math.random().toString(36).substring(3);
       
        var user = {
            name:       `Test_${randomString}`,
            email:      `testemail_${randomString}@test.com`,
            password:   `fdsfds324432fsfds${randomString}dsadsadsads432432234adasdas`
        };

        it('POST /register', function (done) {

            request(sails.hooks.http.app)
            .post('/register')
            .send({ 
                name: user.name, 
                email: user.email,
                password: user.password
            })
            .expect(200)
            .expect('Content-Type', /json/)
            .expect('location','/register', done);
            
        });

        it('POST /login', function (done) {
            
            request(sails.hooks.http.app)
            .post('/login')
            .send({ 
                email: user.email,
                password: user.password
            })
            .expect(200)
            .expect('Content-Type', /json/)
            .expect(function (res) {
                if (!('success' in res.body)) throw new Error("login not successful");
            })
            .expect('location','/login', done);
            
        });
    });

});