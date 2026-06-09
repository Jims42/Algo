import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
async function main() {
  const clavier = new createInterface({ input, output });

  function esPremier(N) {
    if (N <= 1) {
      return false;
    }
    if (N === 2) {
      return true;
    }
    if (N % 2 === 0) {
      return false;
    }
    for (let i = 3; i<=Math.sqrt(N); i += 2) {
      if (N % i === 0) {
        return false;
      }
    }

    return true;
  }

  let nombre = await clavier.question("Donne un nombre entier : \n");
  console.log("----------------------------------------");
  for (let p = 0; p <= nombre; p++) {
    if (esPremier(p)) {
    //   console.log(p + " ");
    process.stdout.write(p+" ");
    }
  }
  console.log("");
  console.log("----------------------------------------");

  clavier.close();
}
await main();
