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

const transfer = async(senderName,recepientName,amount)=>{
    // deduct sender balance
    const sender =  await updateUserBalance(senderName,amount * -1)
    // add recipient balance
    const recipient = await updateUserBalance(recepientName,amount)
    return {
        sender:sender,
        recipient:recipient
    }
}



module.exports = { login, deposit,transfer }