const {LOGIN, WITHDRAW, TRANSFER, LOGOUT, DEPOSIT} = require("./helper/command");
const {login, deposit, withdraw, transfer, logout} = require("./services/atmService");
const rl = require('readline').createInterface({
    input: process.stdin, output: process.stdout
});

const app = async () => {
    let state = {
        "isLogin": false,
        "name": null,
        "balance":0
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
                    const user = await login(args[1]);
                    state.isLogin = user !== undefined;
                    state.name = user.name;
                    state.balance =  user.balance;
                    console.log(`Hello, ${user.name}!\nYour balance is $${user.balance}`)
                    break;
                case DEPOSIT:
                    if (!state.isLogin) {
                        console.log("Unauthorized, Please login!")
                        break;
                    }
                    const depo = await deposit(state,parseInt(args[1]) ?? 0)
                    state.balance =  depo.balance;
                    console.log(`Your balance is $${depo.balance}`)
                    break
                case WITHDRAW:
                    if (!state.isLogin) {
                        console.log("Unauthorized, Please login!")
                        break;
                    }
                    const wd = await withdraw(state,parseInt(args[1]) ?? 0)
                    state.balance =  wd.balance;
                    console.log(`Your balance is $${wd.balance}`)
                    break
                case TRANSFER:
                    if (!state.isLogin) {
                        console.log("Unauthorized, Please login!")
                        break;
                    }
                    const tf = await transfer(state.name,args[1],parseInt(args[2]) ?? 0)
                    state.balance = tf.sender.balance;
                    console.log(`Transferred to , ${tf.recipient.name}!`)
                    console.log(`Your balance is $${tf.sender.balance}!`)
                    break
                case LOGOUT:
                    if (!state.isLogin) {
                        console.log("Unauthorized, Please login!")
                        break;
                    }
                    const lout = await logout()
                    console.log(`Goodbye, ${state.name}!`)
                    state.name = lout.name;
                    state.isLogin = false;
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