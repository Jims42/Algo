import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

async function main() {
    const clavier = createInterface({ input, output });
    
let tableau=[];


let taille =parseInt(await clavier.question("Choisissez la taille du tableau : "));
for (let i = 0; i < taille; i++) {
   let alea=Math.floor(Math.random()*101);
    tableau.push(alea);
    
}
// console.log(tableau);
console.table(tableau);

triBulle(tableau);
// console.log(tableau);
// console.table(tableau);
tabaffichage(tableau);

function triSel(tab){
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

  function triBulle(tab){
    let echange=false;
    for (let i = 0; i < tab.length; i++) {
        echange=false;
        for(let j=0;j<tab.length-1-i;j++){
            if (tab[j]>tab[j+1]) {
                let temp =tab[j];
                tab[j]=tab[j+1];
                tab[j+1]=temp;
                echange=true;
            }
        }
if (!echange) 
   break; 

    }
  }
//   function tabaffichage(tab){
//     console.log("========================================================================================================");
   
//         console.log(tab.join(" || "));
    
//      console.log("========================================================================================================");
//   }
function tabaffichage(tab) {
    // 1. Trouver la longueur du nombre le plus long dans le tableau
    // On transforme les nombres en chaînes pour mesurer leur .length
    let maxLongueur = Math.max(...tab.map(num => num.toString().length));

    // 2. Transformer chaque élément pour qu'il ait la même largeur
    // padStart(maxLongueur, " ") ajoute des espaces au début pour atteindre la taille max
    let tabFormate = tab.map(num => num.toString().padStart(maxLongueur, " "));

    // 3. Créer la ligne de contenu
    let ligneContenu = tabFormate.join(" || ");

    // 4. Rendre les lignes de séparation ("===") dynamiques selon la taille de la ligne de contenu
    let separateur = "=".repeat(ligneContenu.length);

    // 5. Affichage
    console.log(separateur);
    console.log(ligneContenu);
    console.log(separateur);
}

    clavier.close();
}
await main();