import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

async function main() {
    const clavier = createInterface({ input, output });
    let phrase = '';
    
    while (phrase.length < 120) {
        phrase = await clavier.question("Veuillez écrire une phrase d'au moins 120 caractères\n");
        console.log("( longueur actuelle : " + phrase.length + " )");
        if (phrase.length < 120) {
            console.log("Phrase trop courte !\nRecommencez");
        }
    }

    // CORRECTION 1 : Initialiser le tableau avec 26 zéros (un pour chaque lettre de l'alphabet)
    let occurence = new Array(26).fill(0); 
    
    let phraseMaj = phrase.toUpperCase();
    
    for (let i = 0; i < phraseMaj.length; i++) {
        let c = phraseMaj.charAt(i);
        
        if (c >= 'A' && c <= 'Z') {
            // CORRECTION 2 : Utiliser charCodeAt() pour obtenir la position de 0 à 25
            let index = c.charCodeAt(0) - 'A'.charCodeAt(0);
            occurence[index]++;
        }
    }
   
    console.log("\n--- Résultat du dénombrement ---");
    for (let n = 0; n < occurence.length; n++) {
        // CORRECTION 3 : Convertir le code ASCII en lettre lisible
        let lettre = String.fromCharCode('A'.charCodeAt(0) + n);
        
        // CORRECTION 4 : Afficher uniquement l'élément n du tableau (occurence[n])
        console.log(`Lettre ${lettre} : ${occurence[n]} fois`);
    } // L'accolade fermante de la boucle for

    clavier.close();
} // Fin de la fonction main

await main();
