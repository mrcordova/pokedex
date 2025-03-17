import { createInterface } from "node:readline";
import { stdin, stdout } from "node:process";
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
    stdout.write(`Your command was: ${arrResults[0]}\n`);
    rl.prompt();
  });

  rl.prompt();
}
