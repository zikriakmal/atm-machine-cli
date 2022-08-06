const {findByName, createUser} = require("./userService");

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
    return {
        "name": "Aliah",
        "balance": 25000
    }
}

module.exports = { login, deposit }