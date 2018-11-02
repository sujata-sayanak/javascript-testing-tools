QUnit.test('Addition Test', function (assert) {
    assert.strictEqual(ArthimeticOperations.addTwoNumbers(3, 5), 8, "Tested the addition functionality");
});

QUnit.test('Subtraction Test', function (assert) {
    assert.strictEqual(SubtractionOperations.subtractTwoNumbers(9, 5), 4, "Tested the subtraction functionality");
});

QUnit.test('Multiplication Test', function (assert) {
    assert.strictEqual(MultiplicationOperations.multiplyTwoNumbers(3, 5), 15, "Tested the multiplication functionality");
});

QUnit.test('Division Test', function (assert) {
    assert.strictEqual(DivisionOperations.divideTwoNumbers(15, 5), 3, "Tested the division functionality");
});
