import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

async function main() {
  const clavier = createInterface({ input, output });
  let number = parseInt(
    await clavier.question("Entrez un nombre entier positif >1 !\n"),
  );
  let nbDiviseur = 0;
  let tabNumber = [];
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      tabNumber.push(i);
      nbDiviseur++;
    }
  }
  let initialValue = 0;

  // const sumWithInitial = array1.reduce(
  //   (accumulator, currentValue) => accumulator + currentValue,
  //   initialValue,
  // );

  const sommeD = tabNumber.reduce(
    (accumulator, curentValue) => accumulator + curentValue,
    initialValue,
  );

  var sommetest = 0;

  //   for (let i = 0; i < tabNumber.length; i++) {
  //     sommetest += tabNumber[i];
  //   }

  tabNumber.forEach((e) => {
    sommetest += e;
  });
  if (nbDiviseur == 0) {
    console.log("le nombre : " + number + " est premier !");
  } else {
    console.log(`Les diviseur du nombre ${number} sont : ${tabNumber}`);
    console.log(number + " est divisible par " + nbDiviseur + " diviseurs");
    console.log(`la somme des diviseurs est : ${sommeD}`);
    console.log(`la somme des diviseurs est : ${sommetest}`);
  }
  clavier.close();
}
await main();
