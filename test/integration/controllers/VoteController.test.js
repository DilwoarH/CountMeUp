var request = require('supertest');

describe('VoteController', function() {

    describe('/vote successful test', function() {
        
        var randomString = Math.random().toString(36).substring(3);
       
        var user = {
            name:       `Test_${randomString}`,
            email:      `testemail_${randomString}@test.com`,
            password:   `fdsfds324432fsfds${randomString}dsadsadsads432432234adasdas`
        };

        var candidate_data = {
            candidate_id: 1,
            test: true
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
            .end(done);
            
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
            .end(done);
            
        });

        it('POST /vote', function (done) {
            
            request(sails.hooks.http.app)
            .post('/vote')
            .send( candidate_data )
            .expect(201)
            .expect('Content-Type', /json/)
            .end(done);
            
        });

    });

    describe('/vote failure test', function() {
        
        var randomString = Math.random().toString(36).substring(3);
       
        var user = {
            name:       `Test_${randomString}`,
            email:      `testemail_${randomString}@test.com`,
            password:   `fdsfds324432fsfds${randomString}dsadsadsads432432234adasdas`
        };

        var candidate_data = {
            candidate_id: 1,
            test: true
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
            .end(done);
            
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
            .end(done);
            
        });

        it('POST /vote', function (done) {
            
            //first vote
            request(sails.hooks.http.app)
            .post('/vote')
            .send( candidate_data )
            .expect(201)
            .expect('Content-Type', /json/)
            .end(done);

            //second vote
            request(sails.hooks.http.app)
            .post('/vote')
            .send( candidate_data )
            .expect(201)
            .expect('Content-Type', /json/)
            .end(done);

            //third vote
            request(sails.hooks.http.app)
            .post('/vote')
            .send( candidate_data )
            .expect(201)
            .expect('Content-Type', /json/)
            .end(done);
            
            //fourth vote
            request(sails.hooks.http.app)
            .post('/vote')
            .send( candidate_data )
            .expect(403)
            .expect('Content-Type', /json/)
            .end(done); 

        });

    });

});