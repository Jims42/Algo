const { resolve } = require('dns');
const readline = require('readline');

const clavier = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Fonction utilitaire pour poser une question et récupérer une réponse sous forme de booléen (true/false)

function poserQuestion(question){
    return new Promise((resolve) => {
        clavier.question(question + `(oui/non) : `, (reponse) =>{
            const valide = ['oui', 'y', 'o', 'yes'].includes(reponse.toLowerCase().trim());
            resolve(valide);
        });
    });
}

// On enveloppe le code dans une fonction asynchrone pour pouvoir attendre les réponses de l'utilisateur
async function lancerScenario() {
    console.log("--- Début de la simulation de votre journée ---\n");

    // Étape 1 : Les questions interactives
    const faitBeau = await poserQuestion("Est-ce qu'il fait beau demain ?");
    
    let veloEnEtat = false;
    let repparationImediate = false;
    let posseGot = false;
    let gotDisponibleBibliotheque = false;

    if (faitBeau) {
        veloEnEtat = await poserQuestion("Votre vélo est-il en bon état ?");
        if (!veloEnEtat) {
            repparationImediate = await poserQuestion("Le garagiste peut-il le réparer immédiatement ?");
        }
    } else {
        posseGot = await poserQuestion("Possédez-vous déjà le livre Game of Thrones dans votre salon ?");
        if (!posseGot) {
            gotDisponibleBibliotheque = await poserQuestion("Le livre est-il disponible à la bibliothèque municipale ?");
        }
    }

    console.log("\n--- Résultat du scénario ---\n");

    // Étape 2 : Ta logique conditionnelle (inchangée, juste nettoyée des accolades manquantes)
    if (faitBeau) {
        console.log("Il fait beau demain.\n");
        let peuFaireVelo = false;

        if (veloEnEtat) {
            peuFaireVelo = true;
        } else {
            console.log("Le vélo n'est pas en parfait état. Je passe chez le garagiste avant la balade.\n");

            if (repparationImediate) {
                console.log("Super, les réparations sont immédiates !\n");
                peuFaireVelo = true;
            } else {
                console.log("Les réparations ne sont pas immédiates, je dois renoncer à la balade en bicyclette.\n");
            }
        }

        if (peuFaireVelo) {
            console.log("Résultat : J'enfourche mon vélo et je pars me balader !\n");
        } else {
            console.log("Résultat : Comme mon vélo n'est pas utilisable, j'irai à pied jusqu'à l'étang pour cueillir les joncs.\n");
        }

    } else {
        console.log("Il ne fait pas beau, je consacrerai ma journée à la lecture.\n");
        let livreChoisi = "";

        console.log("Je cherche le livre Game of Thrones dans la bibliothèque du salon...\n");
        if (posseGot) {
            console.log("Je l'ai trouvé !");
            livreChoisi = "le 1er tome de Game of Thrones";
        } else {
            console.log("Je ne le retrouve pas dans le salon. J'irai l'emprunter à la bibliothèque municipale.\n");

            if (gotDisponibleBibliotheque) {
                console.log("Le livre est disponible à la bibliothèque municipale.\n");
                livreChoisi = "le 1er tome de Game of Thrones";
            } else {
                console.log("Le livre n'est pas disponible... J'emprunterai un roman policier à la place.\n");
                livreChoisi = "un roman policier";
            }
            console.log("Je rentrerai ensuite à la maison.\n");
        }
        console.log(`Résultat : Dès que j'aurai ${livreChoisi}, je m'installerai confortablement dans un fauteuil et me plongerai dans la lecture.\n`);
    }

    // On ferme le scanner à la toute fin
    clavier.close();
}

// Lancement du programme
lancerScenario();