describe('jasmine hook', function(){

	beforeAll(function(){
		console.log('running beforeAll');
	});

	beforeEach(function(){
		console.log('running beforeEach');
	});
	
	afterAll(function(){
		console.log('running afterAll');
	});

	afterEach(function(){
		console.log('running afterEach');
	});
	
	
	it('test 01', function(){
		console.log('running test 01');
	});
	
	it('test 02', function(){
		console.log('running test 02');
	});
	
	it('test 03', function(){
		console.log('running test 03');
	});

});