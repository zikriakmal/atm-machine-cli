const assert = require('assert');
const { login, deposit} = require('../src/services/atmService');
const {findByName} = require("../src/services/userService");


describe('ATM Machine (DKatalis test purpose)', () =>
{
    it("Old User Login Success", async() =>
    {
        const name = 'Alice'
        const result = await login(name)
        const assertVal = `Hello, ${name}!\nYour balance is $14000`
        const resultVal = `Hello, ${result.name}!\nYour balance is $${result.balance}`
        assert.strictEqual(resultVal, assertVal)
    })

    it("New User Login Success", async () =>
    {
        const name = Math.random().toString(36)
        const result = await login(name)
        const assertVal = `Hello, ${name}!\nYour balance is $0`
        const resultVal = `Hello, ${result.name}!\nYour balance is $${result.balance}`
        assert.strictEqual(resultVal, assertVal)
    })

    it("Deposit Success", async () =>
    {
        const name = "Aliah"
        const amount = 1000
        const user = await findByName(name)
        const resultVal = await deposit(user,amount)
        const assertVal = user.balance + amount
        assert.strictEqual(resultVal.balance, assertVal)

    })





})