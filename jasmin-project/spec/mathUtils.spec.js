describe("MathUtils", function() {
    var calc;
 
    //This will be called before running each spec
    beforeEach(function() {
        calc = new MathUtils();
    });
 
    describe("tests to verify basic math operations", function(){
         
        //Spec for sum operation
        it("test to check sum of two numbers, should return 8", function() {
            expect(calc.sum(3,5)).toEqual(8);
        });
        
        //Spec for minus operation
        it("test to check diff of two numbers, should return 20", function(){
        	expect(calc.substract(50,30)).toEqual(20);
        });
 
        //Spec for multiply operation
        it("test to check multiplication of two numbers, should return 400", function() {
            expect(calc.multiply(10, 40)).toEqual(400);
        });
        
        //Spec for division operation
        it("test to check division of two numbers, should return 2", function(){
        	expect(calc.divide(100,50)).toEqual(2);
        });
 
        //Spec for factorial operation for positive number
        it("test to check factorial of a number, should return 362880", function() {
            expect(calc.factorial(9)).toEqual(362880);
        });
         
        //Spec for factorial operation for negative number
        it("should be able to throw error in factorial operation when the number is negative", function() {
            expect(function() {
                calc.factorial(-7)
            }).toThrowError(Error);
        });
        
        xit("this spec should not be executed", function(){
        expect(2,2).toEqual(4);
        });
         
    });
});

xdescribe("test to disable suite and specs", function(){
	it("this block should not be executed", function(){
		expect(2,2).toEqual(4);
	});
});



describe("tests for jasmine spies", function() {
    var calc;
 
    beforeEach(function() {
        calc = new MathUtils();
        spyOn(calc, 'sum');
    });
 
    describe("test jasmin spyon on sum method()", function(){   
        //Test for sum operation
        it("should be able to calculate sum of 3 and 5", function() {
            //call any method
            calc.sum(3,5);
            //verify it got executed
            expect(calc.sum).toHaveBeenCalled();
            expect(calc.sum).toHaveBeenCalledWith(3,5);
        });
 
    });
});