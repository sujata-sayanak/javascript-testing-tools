QUnit.module('module 1');

QUnit.test('my first test', function(assert){
	assert.ok(true);
});


QUnit.module('module 2', {
	setup: function(){

	},
	teardown: function(){

	}

});

QUnit.test('my second test', function(assert){
	assert.ok(true);
});


// These test are not included in a module
QUnit.test("This is the name for this test", function (assert) { // does not use the "expected" param
    assert.expect(1);	// register how many assertions to Expect to be run within this test.
    assert.ok(true);	// No message, so will just display 'okay'
});

// is the same as
QUnit.test("This is another test", function (assert) { // use the "expected" param to register how many
    // assertions to Expect to be run within this test.
    assert.ok(true, 'Look, a message!');
});

//Declare a module to group tests together in
QUnit.module('module 3');

// The following tests will be part of a module called 'My Module'
QUnit.test("1-2-3", function(assert) {
    assert.expect(3);
    var one = 1, two = 2, three = 3;

    assert.equal(one, 1, "1 equals 1");
    assert.equal(two, 2, "2 equals 2");
    assert.equal(three, 3, "3 equals 3");
});

QUnit.test("4-5-6", function(assert) {
    assert.expect(3);
    var four = 4, five = 5, six = 6;

    assert.equal(four, 4, "4 equals 4");
    assert.equal(five, 5, "5 equals 5");
    assert.equal(six, 6, "6 equals 6");
});


QUnit.module('All these tests will fail...');
QUnit.test("This test will fail", 2, function (assert) {
    //assert.ok(false); // setting this to false will cause the test to fail
    assert.equal(1, 2, 'Of course 1 does not equal 2!');
});
