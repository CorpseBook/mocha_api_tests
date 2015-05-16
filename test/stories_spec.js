var should = require("should")
var request = require('supertest')

var url = "http://localhost:3000"
var request = request(url);


describe('Stories', function(){


  describe('POST /stories', function(){

  	it('gets success and returns json', function(done){
  		var story = {story: {title: "Supernatural Winnipeg", contribution_limit: 12, lat:-41.270833, lng: 173.283889}}
	  	request.post('/stories')
	  		.set('Accept', 'application/json')
	  		.send(story)
	  		.expect('Content-Type', /json/)
	  		.end(function(err, res){
	  			console.log(res.body.story.title);
				(res.body.story.title).should.be.eql(story.story.title)	  			
	  			done()
	  		});  		
  	})
  })

  describe('GET /stories', function(){

  	it('gets success and returns json', function(done){
	  	request.get('/stories')
	  		.set('Accept', 'application/json')
	  		.expect('Content-Type', /json/)
	  		.expect(200, done);  		
  	})
  })


})