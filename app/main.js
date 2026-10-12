const path = require("path");
const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "$ ",
});
const unordered_Set = new Set(["echo","exit","type"]);

rl.prompt();

rl.on("line", (command) => {
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
      const envPath = process.env.PATH || "";
      const directories = envPath.split(path.delimiter);
      let found = false;
      for(const dir of directories){
        const fullPath = path.join(dir,targetCommand);
        try{
          if(fs.existsSync(fullPath)){
            fs.accessSync(fullPath, fs.constants.X_OK);
            console.log(`${targetCommand} is ${fullPath}`);
            found = true;
            break;
          }
        }catch(err){
          continue;
        }
      }
      if (!found) {
        console.log(`${targetCommand}: not found`);
      }
    }
  } else {
    console.log(`${command}: command not found`);
  }

  rl.prompt();
});