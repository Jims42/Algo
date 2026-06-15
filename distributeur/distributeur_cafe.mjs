import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import console from "node:console";

async function main() {
    const clavier = createInterface({ input, output });
    
let prixCafe;
let argentInsere;

prixCafe=1;
console.log(`Le prix du cafe est est${prixCafe} euros\nVeuillez payer !!! `)

argentInsere=Number(await clavier.question("Inserez l'argent demandé : "));
console.log(`Vous avez insere ${argentInsere} euros`);
if (argentInsere<prixCafe) {
    console.log("Solde insufisant")
    
} else {
    console.log("Préparation du café en cours...");
    console.log("Merci et bonne journée !")
    
}


    clavier.close();
}
await main();