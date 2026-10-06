const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "$ ",
});

rl.prompt();
rl.on('line', (input) => {
  // previous submission was working but conceptually wrong this is correct for previous challange
  if (input === "exit 0" || input === "exit") {
    rl.close();
    return;
  }
  let present = input.includes('echo');
  if(present){
    let result = input.replace('echo ','');
    console.log(`${result}`);
  }else{
    console.log(`${input}: invalid command`);
  }
  rl.prompt();
});