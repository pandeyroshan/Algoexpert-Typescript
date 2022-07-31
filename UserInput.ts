var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("What do you think of NodeJS?", function(answer) {
    console.log("Thank you for valuable feedback:", answer);
    rl.close();
});