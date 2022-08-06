const {findByName, createUser, updateUserBalance} = require("./userService");

const login = async (name) =>
{
    //todo check logged in or not
    let user = await findByName(name)
    if(user === undefined) user = await createUser(name)
    console.log(`Hello, ${user.name}!\nYour balance is ${user.balance}`)
    return user
}

const deposit = async (user,amount) =>
{
    user = updateUserBalance(user.name,amount)
    return user
}

module.exports = { login, deposit }