var request = require('supertest');

describe('ReportController', function() {

    describe('/candidates successful test', function() {
        
        it('GET /candidates', function (done) {

            request(sails.hooks.http.app)
            .get('/candidates')
            .expect(200)
            .expect('Content-Type', /json/)
            .end(done);
            
        });

    });

});