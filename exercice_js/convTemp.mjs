// Exercice de révision à faire " Le convertisseur  Degré FahrenHeit <-->Degré Celcius "
// Exercice 2.2 : Conversion Degrés Fahrenheit (°F) <--> Degrés Celsius (°C)
// Exercice 2.2.1 :
// Soit "X" la valeur à convertir.
// Formule °F vers °C : °C = (X − 32) * 5/9
// Formule °C vers °F : °F = (X * 9/5) + 32
// L'utilisateur saisit une valeur numérique comprise entre -459.67 et 5 000 000 suivi de l'unité de température :
// ▪ C pour Celsius
// ▪ F pour Fahrenheit
// La valeur et l'unité de température sont séparés par un espace (exemple: 32 C pour 32 degrés Celsius). Si la valeur est
// hors limite, l’utilisateur recommence la saisie.
// Pour information, le zéro absolu correspond à -459.67 Degrés Fahrenheit ou -273.15 degrés Celsius. En physique, rien
// ne peut être plus froid que le zéro absolu !
// La température de la plus basse jamais enregistrée sur Terre est de -95 degrés Celsius.
// Le programme affiche le résultat de la conversion sous forme de nombre réel double précision.
// Exemple d’affichage en mode Console :
// Programme de conversion Celsius <-> Fahrenheit.
// Saisir une température avec son unité de mesure (C ou F) :
// 17 C
// 17 °C = 62.6 °F

import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

async function main() {
  const clavier = createInterface({ input, output });
  let X = 0;
  let ques = false;
  let unite;
  let valeur;

  do {
    X = (
      await clavier.question("Entrez la valeur que vous voulez convertir : ")
    ).toUpperCase();
   
    let saisie = X.match(/^(\d+)([a-zA-Z]+)$/);

    if (saisie) {
      valeur = saisie[1];
      unite = saisie[2];
   
    }
    if (valeur >= -459.67 && valeur <= 5000000) {
      ques = true;
    } else {
      console.log(
        "ERRUR !!!\n Veuillez saisir une valeur comprise entre -459.67 et 5 000 000",
      );
      ques = false;
    }
   
  } while ((ques = false));
  if (unite === "F") {
    unite == "C";
    let fTOc = (((valeur - 32) * 5) / 9).toFixed(2);
    console.log(
      "la conversion en Celcius de " + X + "° est eqal à " + fTOc,
      unite + "°",
    );
  }
  if (unite === "C") {
    unite = "F";
    let cTOf = ((valeur * 9) / 5 + 32).toFixed(2);
    console.log(
      "la conversion en Celcius de " + X.toUpperCase() + "° est eqal à " + cTOf,
      unite + "°",
    );
  }

  clavier.close();
}
await main();
