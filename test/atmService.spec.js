const assert = require('assert');
const { login } = require('../src/services/atmService');


describe('ATM Machine (DKatalis test purpose)', () =>
{
    it("New User Login Success", () =>
    {
        const name = 'Alice'

        const result = login(name)
        const assertVal = `Hello, ${name}!\nYour balance is $0`
        assert.equal(result, assertVal)
    })
})