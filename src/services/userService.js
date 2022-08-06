const userMap = require('../helper/userMap');
const path = require('path');
const filepath = path.resolve(__dirname, '../../data/users.txt');
const fs = require('fs');

const findAll = async () => {
    let allRecords = [];
    const data = await fs.promises.readFile(filepath, 'utf8');
    data.split('\n').forEach((data) => {
        return allRecords.push(userMap(data))
    });
    return allRecords
}

const findByName = async (name) => {
    const allRecords = await findAll();
    return allRecords.find((data) => {
        return data.name === name
    });
}

const createUser = async (name) => {
    fs.appendFileSync(filepath, `\n${name}|${0}`);
    return await findByName(name)
}

const updateUserBalance = async (name, amount) => {
    let dataReplace = "";
    const allRecords = await findAll();
    allRecords.map(function (data, index) {
        if (data.name === name) {
            data.balance = data.balance + amount
        }

        dataReplace += index !== 0 ? `\n`: ''
        dataReplace += `${data.name}|${data.balance}`;
    })
    fs.writeFileSync(filepath,dataReplace)
    return await findByName(name)

}


module.exports = {findByName, createUser, updateUserBalance}