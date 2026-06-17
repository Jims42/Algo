import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

async function main() {
    const clavier = createInterface({ input, output });
    var phrase="";
    var essai=0;
    do{
        phrase=await clavier.question("veuillez saisir ")
        console.log()
    }

    clavier.close();
}
await main();