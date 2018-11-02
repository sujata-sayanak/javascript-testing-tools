describe('calculator', function(){
	

	it('should retain the current value of all time', function(){
		expect(Calculator.currentValue).toBeDefined();
		expect(Calculator.currentValue).toEqual(0);

	});

	it('should add numbers', function(){ 
		expect(Calculator.add(5)).toEqual(5);
		expect(Calculator.add(5)).toEqual(10);
	});

	it('should add any number of numbers', function(){
		console.log('in add any func');
	});
});
