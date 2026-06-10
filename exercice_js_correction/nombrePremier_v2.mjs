import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
async function main() {
  const clavier = new createInterface({ input, output });
  let N = parseInt(
    await clavier.question("Entrez un nombre entier positif superieur à 1  !"),
  );
  let estPremier = true;
  let diviseur = 0;
  for (let i = 2; i <= Math.sqrt(N); i++) {
    if (N % i == 0) {
      estPremier = false;
      diviseur = i;

      break;
    }
  }
  if (!estPremier) {
    console.log(
      `le nombre : ${N} n'est pas un nombre premier car il est divisible par ${diviseur}`,
    );
  } else {
    console.log(`le nombre : ${N} est premier`);
  }

  clavier.close();
}
await main();
