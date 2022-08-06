const {LOGIN, WITHDRAW, TRANSFER, LOGOUT, DEPOSIT} = require("./helper/command");
const {login} = require("./services/atmService");
const rl = require('readline').createInterface({
    input: process.stdin, output: process.stdout
});

const app = async () => {
    let state = {
        "isLogin": false, "name": null
    }
    rl.prompt();
    rl.on('line', async (line) => {
        const args = line.split(" ");
        if (line.toLowerCase() === "exit") {
            console.log('\nExiting!\n');
            process.exit(0);
        } else {
            switch (args[0]) {
                case LOGIN:
                    state.isLogin = await login(args[1]);
                    state.name = args[1];
                    break
                case DEPOSIT:
                    if (!state.isLogin) {
                        console.log("Unauthorized, Please login!")
                        break;
                    }
                    console.log("ini deposit")
                    break
                case WITHDRAW:
                    if (!state.isLogin) {
                        console.log("Unauthorized, Please login!")
                        break;
                    }
                    console.log("ini withdraw")
                    break
                case TRANSFER:
                    if (!state.isLogin) {
                        console.log("Unauthorized, Please login!")
                        break;
                    }
                    console.log("ini transfer")
                    break
                case LOGOUT:
                    if (!state.isLogin) {
                        console.log("Unauthorized, Please login!")
                        break;
                    }
                    console.log("ini logout")
                    break
                default:
                    console.log("Command not Found!")
            }

        }
        rl.prompt();
    }).on('close', () => {
        console.log('Exiting!');
        process.exit(0);
    });
}


app();