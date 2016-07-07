'use strict';

var app = require('../..');
import request from 'supertest';

var newWork;

describe('Work API:', function() {

  describe('GET /api/works', function() {
    var works;

    beforeEach(function(done) {
      request(app)
        .get('/api/works')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          works = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      works.should.be.instanceOf(Array);
    });

  });

  describe('POST /api/works', function() {
    beforeEach(function(done) {
      request(app)
        .post('/api/works')
        .send({
          name: 'New Work',
          info: 'This is the brand new work!!!'
        })
        .expect(201)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          newWork = res.body;
          done();
        });
    });

    it('should respond with the newly created work', function() {
      newWork.name.should.equal('New Work');
      newWork.info.should.equal('This is the brand new work!!!');
    });

  });

  describe('GET /api/works/:id', function() {
    var work;

    beforeEach(function(done) {
      request(app)
        .get('/api/works/' + newWork._id)
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          work = res.body;
          done();
        });
    });

    afterEach(function() {
      work = {};
    });

    it('should respond with the requested work', function() {
      work.name.should.equal('New Work');
      work.info.should.equal('This is the brand new work!!!');
    });

  });

  describe('PUT /api/works/:id', function() {
    var updatedWork;

    beforeEach(function(done) {
      request(app)
        .put('/api/works/' + newWork._id)
        .send({
          name: 'Updated Work',
          info: 'This is the updated work!!!'
        })
        .expect(200)
        .expect('Content-Type', /json/)
        .end(function(err, res) {
          if (err) {
            return done(err);
          }
          updatedWork = res.body;
          done();
        });
    });

    afterEach(function() {
      updatedWork = {};
    });

    it('should respond with the updated work', function() {
      updatedWork.name.should.equal('Updated Work');
      updatedWork.info.should.equal('This is the updated work!!!');
    });

  });

  describe('DELETE /api/works/:id', function() {

    it('should respond with 204 on successful removal', function(done) {
      request(app)
        .delete('/api/works/' + newWork._id)
        .expect(204)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

    it('should respond with 404 when work does not exist', function(done) {
      request(app)
        .delete('/api/works/' + newWork._id)
        .expect(404)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          done();
        });
    });

  });

});
