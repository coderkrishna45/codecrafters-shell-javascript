const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "$ ",
});

rl.prompt();
rl.on('line', (input) => {
if(input==='exit') process.exit(127);
console.log(`${input}: command not found`);
rl.prompt();
});