import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
async function main() {
  const clavier = new createInterface({ input, output });
  let nb = "";
  let compteur = 0;
  do {
    if (compteur > 0) {
      console.log("ce n'est pas un entier");
    }
    compteur++;
    let nb = parseInt(
      await clavier.question("Veuillez saisir un nombre positif :\n"),
    );
  } while (isNaN(nb));
  let diviseur = 2;
  while (nb % diviseur != 0 && diviseur < nb) {
    diviseur++;
  }
  if (diviseur < nb) {
    console.log(`le nombre : ${nb} n'est pas premier`);
  } else {
    console.log(`❤️  le nombre : ${nb} est premier`);
  }
;
  clavier.close();
}

await main();
