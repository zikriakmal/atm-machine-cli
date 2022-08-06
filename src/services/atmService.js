const {findByName, createUser, updateUserBalance} = require("./userService");

const login = async (name) => {
    //todo check logged in or not
    let user = await findByName(name)
    if (user === undefined) user = await createUser(name)
    return user
}

const deposit = async (user, amount) => {
    user = updateUserBalance(user.name, amount)
    return user
}

const transfer = async (senderName, recepientName, amount) => {
    // deduct sender balance
    const sender = await updateUserBalance(senderName, amount * -1)
    // add recipient balance
    const recipient = await updateUserBalance(recepientName, amount)
    return {
        sender: sender,
        recipient: recipient
    }
}

const logout = async () => {
    return {
        name: null,
        balance: 0
    }
}


const withdraw = async (user,amount) => {
    user = updateUserBalance(user.name, amount * -1)
    return user
}


module.exports = {login,logout, deposit, transfer, withdraw}