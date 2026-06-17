import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

async function main() {
  const clavier = createInterface({ input, output });
  let N;
  let choixNum;
  let max = 100;
  let min = 0;
  let compteur = 0;
  let trouve = false;

  // N=(Math.random(0,100)*101).toFixed(0);
  N = Math.floor(Math.random() * 101);

  do {
    choixNum = parseInt(
      await clavier.question(
        `Veuillez choisir un chiffre entre ${min} et ${max} :\n`,
      ),
    );
    compteur++;
    if (choixNum >= min && choixNum <= max) {
      if (choixNum > N) {
        max = choixNum;
        console.log(
          "Le numero que vous avez choisi est superieur au nombre recherche",
        );
      } else if (choixNum < N) {
        min = choixNum;
        console.log(
          "Le numero que vous avez choisi est inferieur au nombre recherche",
        );
      } else {
        trouve = true;
      }
    } else {
      console.log(
        "Votre nombre n'est pas dans la fouchette, vous perdez un essai !",
      );
    }
  } while (!trouve);
  console.log(
    `!!! BRAVO !!! \n Le nombre recherche est ${choixNum} en ${compteur} essais !`,
  );
  //    console.log(N);
  clavier.close();
}
await main();
