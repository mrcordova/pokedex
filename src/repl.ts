import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";
import { getCommands } from "./commands.js";
import { State } from "./state.js";

export function cleanInput(input: string): string[] {
  return input
    .toLowerCase()
    .trim()
    .split(" ")
    .filter((val) => val !== "");
}

export function startREPL(state: State) {
  const { readline: rl, cmds } = state;
  rl.on("line", (input) => {
    const arrResults = cleanInput(input);
    if (arrResults.length == 0) {
      rl.prompt();
      return;
    }
    // const cmds = getCommands();
    const cmdName = arrResults[0];
    const cmd = cmds[cmdName];

    if (!cmd) {
      stdout.write("Unknown command\n");
    }
    cmd?.callback(state);

    rl.prompt();
  });

  rl.prompt();
}
