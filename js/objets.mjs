import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { callbackify } from "node:util";

async function main() {
  const clavier = createInterface({ input, output });
  const voiture = {
    marque: "Toyota",
    modele: "yaris",
    annee: 2021,
  };
  console.log(voiture);
  voiture.annee = 2024;
  voiture.couleur = "rouge";
  console.log(voiture);
  console.log("------------------------------------");
  const calculatrice = {
    nom: "ma calculatrice",

    additionner(a, b) {
      return a + b;
    },
      soustraction(a, b){
        return a-b;
      },
      multiplier(a, b){
        return a*b;
      }
    };
  
  const resultat = calculatrice.additionner(5, 7);
  const difference = calculatrice.soustraction(5, 7);
  const multi = calculatrice.multiplier(5, 7);
  console.log(resultat);
  console.log(difference);
  console.log(multi);
  clavier.close();
}
await main();
