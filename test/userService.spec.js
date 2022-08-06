const assert = require('assert');
const { findByName, createUser, updateUserBalance} = require('../src/services/userService');


describe('User Service test', () =>
{

    it("Find User By name Success", async () =>
    {
        const name = "Alice"
        const user = await findByName(name)
        assert.equal(user.name, name)
    })

    it("Find User Not found", async () =>
    {
        const name = "Bobs"
        const user = await findByName(name)
        assert.equal(user, undefined)
    })

    it("Create User", async () =>
    {
        const name = "Aliah"
        const res = await createUser(name)
        assert.equal(res.name, name)
    })

    it("Success Update User Balance", async () =>
    {
        const name = "Alice";
        const updateBalanceAmount = 12000;
        const oldUser = await findByName(name)
        const user = await updateUserBalance(name,updateBalanceAmount)
        assert.strictEqual(user.balance,oldUser.balance+updateBalanceAmount)
    })

})
