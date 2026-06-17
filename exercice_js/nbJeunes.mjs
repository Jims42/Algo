import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

async function main() {
  const clavier = createInterface({ input, output });

  let tabAge = [20];
  let jeune = 0;
  console.log("Entrer les ages de 20 personnes : ");
  for (let i = 0; i < 20; i++) {
    tabAge[i] = parseInt(await clavier.question(`Age numero ${i + 1} : `));
  }
  for (let n = 0; n < tabAge.length; n++) {
    if (tabAge[n] < 20) {
      jeune++;
    }
  }
  if (jeune===0) {
    console.log("TOUTES LES PERSONNES ONT PLUS DE 20 ANS");
  }else if(jeune===20){
    console.log("TOUTES LES PERSONNES ONT MOINS DE 20 ANS");
  }else{
  console.log(jeune+" PERSONNES ONT MOINS DE 20 ANS");
  }
  clavier.close();
}
await main();
