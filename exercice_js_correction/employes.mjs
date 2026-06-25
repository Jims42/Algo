import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { readFile } from "fs/promises";
async function main() {
    const clavier = createInterface({ input, output });
    const textBrut =await readFile("./")


    clavier.close();
}
await main();