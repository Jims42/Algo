const faitBeau =true;
const veloEnEtat =false;
const repparationImediate =true;

const posseGot =false;
const gotDisponibleBibliotheque = false;
if(faitBeau){
    console.log("il fait beaub demain.");
    let peuFaireVelo = false;

    if(veloEnEtat){
        peuFaireVelo =true;
    }else{
        console.log("Le vélo n'est pas en parfait état. Je passe chez le garagiste avant la balade.");

        if(repparationImediate){
            console.log("Super, les réparation sont immédiates !\n");
        peuFaireVelo = true;
        }else{
            console.log("Les réparitions ne sont pas immédiates, je dois renoncer à la balade en byciclette.");
        } 

       
    
}
if(peuFaireVelo){
    console.log("Résultat : J'enfourche mon vélo et je pars me balader !");
} else{
        console.log("Résultat : Comme mon vélo n'est pas utilisable, j'irai à pied jusqu'à l'étang pour cueillir les joncs.");
    }
}else{
    console.log("Il ne fait pas beau, je consacrerai ma journée à la lecture.");
    let livreChoisi ="";

    console.log("Je cherche le livrede Game ")
}