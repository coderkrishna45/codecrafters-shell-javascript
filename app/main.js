const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "$ ",
});

rl.prompt();rl.on("line", (command) => {
  if (command === "exit 0" || command === "exit") {
    rl.close();
    return;
  } else if (command === "echo") {
    console.log("");
  } else if (command.startsWith("echo ")) {
    console.log(command.slice(5));
  } else {
    console.log(`${command}: command not found`);
  }

  rl.prompt();
});