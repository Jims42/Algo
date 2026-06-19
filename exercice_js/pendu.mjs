import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

async function main() {
    const clavier = createInterface({ input, output });

    let mot = "";

    // 1. Demande du mot secret
    while (mot.length <= 5) {
        let saisie = await clavier.question("Joueur 1 - Entrez un mot de plus de 5 caractères : ");
        mot = saisie.trim().toUpperCase();

        if (mot.length <= 5) {
            console.log("Le mot est trop court ! Recommencez.\n");
        }
    }

    
    console.clear(); 

    let affichage = [];
    for (let i = 0; i < mot.length; i++) {
        if (i === 0 || i === mot.length - 1) {
            affichage.push(mot[i]); 
        } else {
            affichage.push("_"); 
        }
    }

    let nbEssai = 6;
    let lettresFausses = [];
    let motTrouve = false;

    // 3. Boucle principale du jeu
    while (nbEssai > 0 && !motTrouve) {
        // Affichage de l'état du jeu
        console.log("\n=============================");
        console.log("MOT À TROUVER : " + affichage.join(" "));
        console.log(`Tentatives restantes : ${nbEssai}`);
        
        if (lettresFausses.length > 0) {
            console.log("Lettres fausses : " + lettresFausses.join(" // "));
        }
        console.log("=============================");

        // Demande d'une lettre
        let choix = await clavier.question("Proposez une lettre : ");
        let lettre = choix.trim().toUpperCase();

        // Validation de la saisie
        if (lettre.length !== 1) {
            console.log("Veuillez entrer une seule lettre !");
            continue;
        }

        // Vérification si la lettre a déjà été testée
        if (lettresFausses.includes(lettre) || affichage.includes(lettre)) {
            console.log("Vous avez déjà proposé cette lettre !");
            continue;
        }

        // Vérification si la lettre est dans le mot
        let lettreTrouvee = false;
        for (let i = 0; i < mot.length; i++) {
            if (mot[i] === lettre) {
                affichage[i] = lettre;
                lettreTrouvee = true;
            }
        }

        if (!lettreTrouvee) {
            lettresFausses.push(lettre);
            console.log(`Dommage ! La lettre ${lettre} n'est pas dans le mot.`);
            nbEssai--;
        } else {
            console.log("Bien joué !");
        }

        
        if (!affichage.includes("_")) {
            motTrouve = true;
        }
    }

    
    console.log("\n-----------------------------");
    if (motTrouve) {
        console.log("BRAVO ! Vous avez gagné !");
    } else {
        console.log("DOMMAGE ! Vous avez perdu.");
    }
    console.log("Le mot secret était : " + mot);
    console.log("-----------------------------");
    console.log("MERCI D'AVOIR JOUÉ !");

    clavier.close();
}

await main();