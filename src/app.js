const { login } = require("./services/AtmService");
const { findByName } = require("./services/userService");

// login("Alice")

findByName("Alice").then((data) =>
{
    console.log(data)
})