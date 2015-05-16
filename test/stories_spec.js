var should = require("should")
var request = require('supertest')
var rx = require('rx')


var url = "http://localhost:3000"
// var url = 'http://corpsebook-server.herokuapp.com/'
var request = request(url);


describe('Stories', function(){

	describe('GET /stories', function(){

		it('gets success and returns json', function(done){
			request.get('/stories')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200, done);  		
		})
	})


	describe('GET /stories/id', function(){

		it('gets success and returns json', function(done){
			request.get('/stories')
			.set('Accept', 'application/json')
			.expect('Content-Type', /json/)
			.expect(200, done);  		
		})

	})



	it('Can create and contribute to a story', function(done){

		var story = {story: {title: "Supernatural Winnipeg", contribution_limit: 12, lat:-41.270833, lng: 173.283889}}
		
		request.post('/stories')
			.set('Accept', 'application/json')
			.send(story)
			.expect('Content-Type', /json/)
			.end(function(err, res){
				var createdStory = res.body.story;
				(createdStory.title).should.be.eql(story.story.title);

				var contribution = {contribution: {content: "piet ran ran ran all over the dam"}}
				request.post('/stories/'+createdStory.id+'/contributions')
					.set('Accept', 'application/json')
					.send(contribution)
					.expect('Content-Type', /json/)
					.end(function(err, res){
						if(err){
							done(err)
						}else{
							var createdContribution = res.body.contribution;
							(createdContribution.content).should.be.eql(contribution.contribution.content);
							done();
						}
					})


			});  	

	})




})