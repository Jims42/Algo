import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

async function main() {
  const clavier = createInterface({ input, output });

  let S = parseFloat(
    await clavier.question("Quel montant voulez-vous placer ? \n"),
  );

  const taux = 0.345;
  let nbAnnee = parseInt(
    await clavier.question("Combien d'année vous placez cztte somme ?\n"),
  );
  let choix = await clavier.question(
    "Voulez-vous placer à interêt simple(IS) ou interêt composée(IC) ?\n",
  );
  let VA = S;

  if (choix.toLocaleUpperCase() == "IS") {
    VA = S * (1 + nbAnnee * taux);
    console.log(`la valeur acquise au bout de ${nbAnnee} sera de : ${VA.toFixed(2)} €`);
  } else if (choix.toLocaleUpperCase() == "IC") {
    // VA= S*(1+taux)**nbAnnee;
    VA = S * Math.pow(1 + taux, nbAnnee);
    console.log(`la valeur acquise au bout de ${nbAnnee} sera de : ${VA.toFixed(2)} €`);
  }
  clavier.close();
}
await main();
