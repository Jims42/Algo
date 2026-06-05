const faitBeau =true;
const veloEnEtat =false;
const repparationImediate =true;

const posseGot =false;
const gotDisponibleBibliotheque = false;
if(faitBeau){
    console.log("\nil fait beaub demain.\n");
    let peuFaireVelo = false;

    if(veloEnEtat){
        peuFaireVelo =true;
    }else{
        console.log("Le vélo n'est pas en parfait état. Je passe chez le garagiste avant la balade.\n");

        if(repparationImediate){
            console.log("Super, les réparation sont immédiates !\n");
        peuFaireVelo = true;
        }else{
            console.log("Les réparitions ne sont pas immédiates, je dois renoncer à la balade en byciclette.\n");
        } 

       
    
}
if(peuFaireVelo){
    console.log("Résultat : J'enfourche mon vélo et je pars me balader !\n");
} else{
        console.log("Résultat : Comme mon vélo n'est pas utilisable, j'irai à pied jusqu'à l'étang pour cueillir les joncs.\n");
    }
}else{
    console.log("Il ne fait pas beau, je consacrerai ma journée à la lecture.\n");
    let livreChoisi ="";

    console.log("Je cherche le livre Games of thrones dans la bibliothèque du salon...\n");
    if(posseGot){
        console.log("Je l'ai trouvé !");
        livreChoisi = "Le 1er tome de Game of thrones\n";
    }else{
        console.log("Je ne le retrouve pas dans le salon. J'irai l'emprunterà la bibliothèque municipale.\n");

        if(gotDisponibleBibliotheque){
            console.log("Le livre est disponible à la bibliothèque municipale.\n");
            livreChoisi = "Le 1er tome de Game of thrones";
        }else{
            console.log("Le livre n'est pas disponible ... J'emprenterai un roman policier à la place\n");
            livreChoisi="Un roman policier";
        }
        console.log("Je rentrerai ensuite à la maison.\n");
    }
    console.log(`Resultat : Dès que j'aurai ${livreChoisi}, je m'installerai confortablement dans un fauteil et me plongerai dans la lecture`);
    
}