var throwMeAnError = function(){
	throw new Error();
};

describe("test to check toThrow() feature of jasmine, should throw error,", function(){
	var exp = 25;
	
	it("hey this will throw an error", function(){
		expect(throwMeAnError).toThrow();
	});
});

describe('test to check toEqual() function of jasmine', function(){

	it('should return string hello world', function(){
		expect(helloWorld()).toEqual('Hello World');
		 
});

	it('test to check tobeNaN() function of jasmine, should return undefined', function(){
		expect(0/0).toBeNaN();
	});
});


describe("test to check 3 level nested describe block, and beforeEach() and afterEach() functions of jasmine", function() {
    beforeEach(function() {
        console.log("beforeEach level 1");
    });
    describe("MyTest level2", function() {
        beforeEach(function() {
            console.log("beforeEach level 2");
        });
        describe("MyTest level3", function() {
            beforeEach(function() {
                console.log("beforeEach level 3");
            });
            it("is a simple spec in level3", function() {
                console.log("A simple spec in level 3");
                expect(true).toBe(true);
            });
            afterEach(function() {
                console.log("afterEach level 3");
            });
        });
        afterEach(function() {
            console.log("afterEach level 2");
        });
    });
    afterEach(function() {
        console.log("afterEach level 1");
    });
});
