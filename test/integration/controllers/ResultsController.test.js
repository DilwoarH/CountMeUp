var request = require('supertest');

describe('ReportController', function() {

    describe('/report successful test', function() {
        
        it('GET /report', function (done) {

            request(sails.hooks.http.app)
            .get('/report')
            .expect(200)
            .expect('Content-Type', /json/)
            .expect('location','/report', done);
            
        });

    });

});