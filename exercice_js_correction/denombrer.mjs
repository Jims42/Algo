import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

async function main() {
  const clavier = createInterface({ input, output });

  let alphabetMin = [];
  let frequencelettre = [];

  for (let i = 0; i < 26; i++) {
    alphabetMin.push(String.fromCharCode(97 + i));
    frequencelettre.push(0);
  }
  let text = "";
  let valid = false;
  while (valid == false) {
    text = await clavier.question(
      "entrer une phrase de 120 caractere minimum : \n",
    );
    if (text.length < 120) {
      console.log(
        `Texte trop court de ${120 - text.length} caractere\nVeuillez recommencer`,
      );
    } else {
      valid = true;
    }
  }
  text = text.toLowerCase();
  text = text.replaceAll(" ", "");
  text = text.replaceAll("é", "e");
  text = text.replaceAll("è", "e");
  text = text.replaceAll("ê", "e");

  for (let i = 0; i < alphabetMin.length; i++) {
    let lettre = alphabetMin[i];
    for (let j = 0; j < text.length; j++) {
      if (text[j] == lettre) {
        frequencelettre[i]++;
      }
    }
  }
  for (let i = 0; i<frequencelettre.length; i++) {
    if (frequencelettre[i] > 0) {
      console.log(
        `la lettre ${alphabetMin[i]} est présente : ${frequencelettre[i]} fois dans le texte saisi`,
      );
    }
  }

  clavier.close();
}
await main();
