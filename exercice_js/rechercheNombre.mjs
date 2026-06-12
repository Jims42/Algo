// EXERCICE 3.3 : RECHERCHER UN NOMBRE DANS UN TABLEAU
// Soit un tableau de nombres entier triés par ordre croissant.
// Chercher si un nombre donné N figure parmi les éléments.
// Si oui, afficher sa position dans le tableau avec la valeur de l'indice correspondant. Sinon, afficher « 404 Not found »

import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

async function main() {
  const clavier = createInterface({ input, output });
  let tabNombre = [];
  let nombre;
  for (let i = 0; i < 10; i++) {
    nombre = await clavier.question(`Entrer le nombre ${i + 1} : `);
    tabNombre.push(Number(nombre)); // <=== IMPORTANT car sinon ne tri pas car sinon sont récupérées sous forme de chaînes de caractères (textes) et non de nombres.
  }
  // console.log("les nombre dans le tableau sont : [ "+tabNombre+" ]");
  console.log(tabNombre.join(" || "));

  function triTab(tab) {
    let n = tab.length;

    for (let i = 0; i < n - 1; i++) {
      let min = i;
      for (let j = i + 1; j < n; j++) {
        if (tab[j] < tab[min]) {
          min = j;
        }
      }
      if (min != i) {
        let temp = tab[i];
        tab[i] = tab[min];
        tab[min] = temp;
      }
    }
    console.log(tab.join(" || "));
  }

  triTab(tabNombre);

  let position = 0;
  let trouve = false;

  let N = Number(await clavier.question("Entrez un nombre : "));

  //   for (let n = 0; n < tabNombre.length; n++) {
  //     if (tabNombre[n] === N) {
  //       position = n+1;
  //       trouve = true;
  //       break;
  //     }

  //   }

  tabNombre.forEach((e, n) => {
    if (e === N) {
      position = n + 1;
      trouve = true;
    }
  });
  if (trouve) {
    console.log(
      `Lnombre ${N} est dans le tableau à la position ${position} du tableau`,
    );
  } else {
    console.log("404404 Not Found !");
  }
  clavier.close();
}

await main();
