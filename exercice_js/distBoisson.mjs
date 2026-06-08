import readline from 'readline';


// --------------------------------------------
// INITIALISATION ET VARIABLES GLOBALES
// --------------------------------------------

// Initialisation des variables comme défini dans le pseudo-code
let stockGobelets = 5; // StockGobelets<-5
let prixBoisson = 0;   // prix<-0 (sera mis à jour par le menu)
let sommeIntroduite = 0; // SommeIntroduite<-0

// Configuration du lecteur/scannér pour l'interaction console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/**
 * Simule la fonction AFFICHER "..."
 * @param {string} message Le message à afficher.
 */
function display(message) {
    console.log(`\n--- ${message} ---`);
}

/**
 * 1. Vérifie le stock et lance le programme ou l'arrête si vide. (SI StockGobelets egal 0...)
 */
function checkStock() {
    if (stockGobelets === 0) {
        display("❌ Machine indisponible : Le stock de gobelets est épuisé.");
        rl.close(); // Ferme l'interface car aucune opération n'est possible
        return false; // Retourne fausse pour indiquer que la machine ne peut pas fonctionner
    } else {
        console.log(`✅ Stock Gobelets disponible : ${stockGobelets}`);
        display("🛒 Bienvenue ! Veuillez choisir votre boisson.");
        return true;
    }
}

/**
 * 2. Affiche le menu et récupère le prix (lIRE "Choix boisson" / prix<-prixaffiché)
 */
async function displayMenu() {
    console.log("-------------------------------------------");
    display("🥤 MENU DES BOISSONS :");
    console.log("1. Eau gazeuse : 2.00 €");
    console.log("2. Jus d'Orange : 3.50 €");
    console.log("3. Limonade : 2.50 €");
    console.log("-------------------------------------------");

    // On attend le choix de l'utilisateur
    const choice = await new Promise(resolve => {
        rl.question("Quel numéro de boisson désirez-vous ? (Entrée) ", (input) => {
            resolve(input);
        });
    });

    let selectedPrice = 0;
    
    // Logique pour déterminer le prix basé sur le choix
    if (['1', '2'].includes(choice)) {
        selectedPrice = choice === '1' ? 2.00 : 3.50; // Eau ou Jus d'Orange
    } else if (choice === '3') {
        selectedPrice = 2.50; // Limonade
    } else {
        display("⚠️ Choix invalide. Opération annulée.");
        return false; // Échec de la sélection
    }

    prixBoisson = selectedPrice;
    display(`Votre choix est validé. Prix total : ${prixBoisson.toFixed(2)} €`);
    
    return true; // Succès de la sélection !
}

/**
 * 3. Gère l'insertion de pièces et vérifie si le paiement est complet. (FAIRE ... TANT QUE...)
 */
async function collectMoney() {
    globalThis.sommeIntroduite = 0; // Réinitialisation pour cette transaction
    display("💰 Veuillez insérer de la monnaie ou des billets.");

    // La boucle continue tant que l'argent introduit est inférieur au prix requis
    while (true) {
        const remainingAmount = prixBoisson - globalThis.sommeIntroduite;
        if (remainingAmount <= 0.10) {
            break; // Si moins de 10 centimes manquent, on considère que l'utilisateur a bien payé ou qu'il est assez proche.
        }

        display(`\n[Reste à payer] : ${remainingAmount.toFixed(2)} €`);

        const amountReceived = await new Promise(resolve => {
            rl.question("Insérer combien d'argent ? (Exemple: 1.00 ou 0.50) ", (input) => {
                let value = parseFloat(input.replace(',', '.')); // Nettoie l'entrée utilisateur
                if (isNaN(value) || value < 0) {
                    display("⚠️ Montant invalide. Veuillez réessayer.");
                    return resolve(null); // Force la boucle à recommencer sans changer de somme
                }
                resolve(value);
            });
        });

        if (amountReceived === null) continue; // Si l'entrée était invalide, on passe au tour suivant du while loop.
        
        globalThis.sommeIntroduite += amountReceived;

        // Vérification de surpaiement (Si SommeIntroduite > prixaffiché)
        if (globalThis.sommeIntroduite >= prixBoisson) {
            break; // Sortir de la boucle si le paiement est complet ou dépassé
        }
    }
}

/**
 * 4. Finalise l'opération, distribue et verse la boisson.
 */
async function dispenseProduct() {
    // --- CALCUL DE LA MONNAIE RESTANTE (Calcul du retour) ---
    let monnaieARetourner = globalThis.sommeIntroduite - prixBoisson;

    if (monnaieARetourner > 0) {
        display(`💸 Rendu de la monnaie : ${monnaieARetourner.toFixed(2)} €`);
    } else {
        display("Le montant exact a été payé. Aucune monnaie à rendre.");
    }

    // --- DISTRIBUTION ET STOCK (DistribuerGobelet() / StockGobelets<- StockGobelets-1) ---
    stockGobelets--;
    display(`📦 Gobelet distribué ! Nouveau stock : ${stockGobelets}`);

    // --- VERSAGE DE LA BOISSON (Verser_Boisson())
    await new Promise(resolve => {
        setTimeout(() => {
            display("💧 La boisson est prête. Veuillez récupérer votre produit.");
            resolve();
        }, 1500); // Simulation de délai de versement
    });

    // --- FIN DE L'OPÉRATION ---
    display("\n🎉 Opération terminée ! Merci de votre visite.");
}


/**
 * FONCTION PRINCIPALE D'EXÉCUTION DU VENDING MACHINE
 */
async function runMachine() {
    // 1. Vérification du stock (Initial Check)
    if (!await checkStock()) return;

    try {
        // 2. Choix de la boisson et détermination du prix
        let priceResult = await displayMenu();
        if (!priceResult) return; // Arrête si l'utilisateur a choisi quelque chose d'invalide

        display(`\n========================================`);
        display("💳 ÉTAPE DE PAIEMENT EN COURS...");

        // 3. Collecte de l'argent (Looping/Payment process)
        await collectMoney();

        if (globalThis.sommeIntroduite < prixBoisson - 0.10) {
            // Si après le cycle, l'utilisateur n'a pas payé assez
            display("\n❌ Paiement incomplet. Veuillez insérer plus d'argent.");
            return; // Arrête la transaction
        }

        // 4. Distribution du produit et fin de l'opération
        await dispenseProduct();

    } catch (error) {
        console.error("Une erreur critique est survenue dans le fonctionnement de la machine:", error);
    } finally {
        rl.close(); // Assure toujours que l'interface console est fermée à la fin
    }
}

// Lancer la simulation
runMachine();
