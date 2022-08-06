const userMap = (data) =>
{
    const cleanData = data.split('|')
    return {
        name: cleanData[0],
        balance: Number(cleanData[1])
    }
}

module.exports = userMap;