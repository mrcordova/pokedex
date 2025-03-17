import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";
import { getCommands } from "./command.js";

export function cleanInput(input: string): string[] {
  return input
    .toLowerCase()
    .trim()
    .split(" ")
    .filter((val) => val !== "");
}

export function startREPL() {
  const rl = createInterface({
    input: stdin,
    output: stdout,
    prompt: "Pokedex > ",
  });

  rl.on("line", (input) => {
    const arrResults = cleanInput(input);
    if (arrResults.length == 0) {
      rl.prompt();
      return;
    }
    const cmds = getCommands();
    const cmdName = arrResults[0];
    const cmd = cmds[cmdName];

    if (!cmd) {
      stdout.write("Unknown command\n");
    }
    cmd?.callback(cmds);

    //   if (cmds[cmd]) {

    //   }

    // if (cmds[cmd]?.name === "exit") {
    //   cmds[cmd].callback(cmds);
    // } else if (cmds[cmd]?.name === "help") {
    //   cmds[cmd].callback(cmds);
    // } else {
    //
    // }
    // stdout.write(`Your command was: ${arrResults[0]}\n`);

    rl.prompt();
  });

  rl.prompt();
}
