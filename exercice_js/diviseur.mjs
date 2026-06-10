import { createInterface } from "node:readline/promises";
import { stdin as input,stdout as output } from "node:process";

async function main() {

    const clavier = new createInterface({input,output});

    function trouverDiviseurs(nombre) {
    // On s'assure que le nombre est positif pour la recherche
    let n = Math.abs(nombre);
    let diviseurs = [];

    // On cherche les diviseurs de 2 jusqu'à la racine carrée du nombre
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            diviseurs.push(i);
            
            // Si le diviseur complémentaire est différent, on l'ajoute aussi
            if (i !== n / i) {
                diviseurs.push(n / i);
            }
        }
    }

    // On trie les diviseurs par ordre croissant
    diviseurs.sort((a, b) => a - b);

    // Affichage du résultat
    if (diviseurs.length === 0) {
        console.log(`Le nombre ${nombre} n'a pas d'autres diviseurs que 1 et lui-même (c'est un nombre premier).`);
    } else {
        console.log(`Les diviseurs de ${nombre} (excepté 1 et ${nombre}) sont :`, diviseurs);
    }
    
    return diviseurs;
}
let reponse = await clavier.question("Donnez un nombre : ");
trouverDiviseurs(reponse);
// trouverDiviseurs(26);
clavier.close();
}
await main();