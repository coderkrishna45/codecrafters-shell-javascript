const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "$ ",
});
const unordered_Set = new Set(["echo","exit","type"]);
rl.prompt();rl.on("line", (command) => {
  if (command === "exit 0" || command === "exit") {
    rl.close();
    return;
  } else if (command === "echo") {
    console.log("");
  } else if (command.startsWith("echo ")) {
    console.log(command.slice(5));
  } else if(command.startsWith("type ")){
    let targetCommand = command.slice(5);
    if(unordered_Set.has(targetCommand)){
      console.log(`${targetCommand} is a shell builtin`);
    }else{
      console.log(`${targetCommand}: not found`);
    }
  } else {
    console.log(`${command}: command not found`);
  }

  rl.prompt();
});