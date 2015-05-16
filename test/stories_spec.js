var should = require("should")
var request = require('supertest')

var url = "http://localhost:3000"
var request = request(url);


describe('Stories', function(){

  describe('get /stories', function(){

  	it('gets success and returns json', function(done){
	  	request.get('/stories')
	  		.set('Accept', 'application/json')
	  		.expect('Content-Type', /json/)
	  		.expect(200, done);  		
  	})
  })


})