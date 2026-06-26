import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

async function main() {
    const clavier = createInterface({ input, output });

    const etudiants = [
{ nom: "Alice", note: 15 },
{ nom: "Bob", note: 9 },
{ nom: "Charlie", note: 14 }
];

for (let i = 0; i < etudiants.length; i++) {
    if(etudiants[i].note > 10){
        console.log(`${etudiants[i].nom} <---> ${etudiants[i].note}/20 <==> RECU`);
    }else {
        console.log(`${etudiants[i].nom} <---> ${etudiants[i].note}/20 <==> RATTRAPAGE`);
    }
  }
  console.log("-----------------------------");
  forEach(etudiants => {
    console.log(`Étudiant : ${etudiant.nom}, Note : ${etudiant.note}`);
  });

// console.log(etudiants);
    clavier.close();
}
await main();