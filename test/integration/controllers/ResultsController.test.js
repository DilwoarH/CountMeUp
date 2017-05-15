var request = require('supertest');

describe('ResultsController', function() {

    describe('/results successful test', function() {
        
        it('GET /results', function (done) {

            request(sails.hooks.http.app)
            .get('/results')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(done);
            
        });

    });

});