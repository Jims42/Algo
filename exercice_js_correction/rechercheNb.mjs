import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

async function main() {
  const clavier = createInterface({ input, output });
  let tailleTab = parseInt(
    await clavier.question(
      "Combien de valeur du tableau voulez-vous saisir ?\n",
    ),
  );
  let tabNb = [];
  console.log(tailleTab);
  for (let i = 0; i < tailleTab; i++) {
    tabNb.push = parseInt(
      await clavier.question(`Veuillez saisir le nombre entier N° ${i + 1} : `),
    );
  }
  
  tabNb.sort((a, b) => a - b);
  console.log(tabNb);
  let position = 0;

  let N = parseInt(await clavier.question("Entrez un nombre : "));
  for (let n = 0; n < tailleTab; n++) {
    if (tabNb[n] > N) {
      break;
    }
    if (tabNb[n] === N) {
      position = n + 1;
      trouve = true;
    }
  }
  if (trouve) {
    console.log(
      `Lnombre ${N} est dans le tableau à la position ${position} du tableau`,
    );
  } else {
    console.log("404 Not Found !");
  }

  clavier.close();
}
await main();
