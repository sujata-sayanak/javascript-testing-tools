class Calculator{

	add (a, b){
		return a + b;
	}
	
	minus (a, b){
	
		return a - b ;
	}
	
	description(){
		return('this is a calculator class');
	}


}

	
describe('tests to verify jasmines functions', function(){

	var calculator = new Calculator();

	it('test to check tobe() function of jasmine', function(){
		expect(calculator.add(2,4)).toBe(6);
		
	});
	
	it('test to check not.tobe() function of jasmine', function(){
		expect(calculator.add(2,4)).not.toBe(5);
	});
	
	it('test to check toEqual() function of jasmine', function(){
		expect(calculator.add(2,4)).toEqual(6);
	});
	
	it('test to check toBeGreaterThan() function of jasmine', function(){
		expect(calculator.add(2,4)).toBeGreaterThan(5);
	});
	
	
	it('test to check not.toBeGreaterThan() function of jasmine', function(){
		expect(calculator.add(2,4)).not.toBeGreaterThan(7);
	});
	
	it('test to check toBeLessThan() function of jasmine', function(){
		expect(calculator.add(2,4)).toBeLessThan(7);
	});
	
	it('test to check not.toBeLessThan() function of jasmine', function(){
		expect(calculator.add(2,4)).not.toBeLessThan(5);
	});
	
	it('test to check toMatch() function of jasmine', function(){
		expect(calculator.description()).toMatch('class');
	});
	
	it('test to check toContain() function of jasmine', function(){
		expect(calculator.description()).toContain('calculator');
	});
	
	it('test to check toBeDefined() function of jasmine', function(){
		expect(calculator).toBeDefined();
	});
	
	it('test to check not.toBeUndefined() function of jasmine', function(){
		expect(calculator).not.toBeUndefined();
	});
	
	it('test to check not.toBeNull() function of jasmine', function(){
		expect(calculator).not.toBeNull;
	});
	
	it('test to check calculator object is created', function(){
		expect(calculator).toBeDefined();
		expect(calculator).not.toBeUndefined();
		expect(calculator).not.toBeNull;
		
	});
	
	it('test to check description of the calculator class', function(){
		expect(calculator.description()).toMatch('class');
		expect(calculator.description()).toContain('calculator');
	});
	
});



describe('test to verify describe blocks nesting', function(){
var calculator1 = new Calculator();

it('executed outer block', function(){
		expect(calculator1.add(2,4)).toBe(6);
});

describe('nested describe block', function(){
	it('executed nested block', function(){
		expect(calculator1.minus(9,7)).toBe(2);
});
});
});