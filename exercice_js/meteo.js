function etatByciclette(){
    const moisDerniereUtilisation = 3;
    return moisDerniereUtilisation < 2;
}
function livreDisponibleMaison(){
    return false;
}
function livreDisponibleBibliotheque(){
    return false;
}
function routineMateo(faitBeauDemain){
    if (faitBeauDemain){
        console.log("Il fait beau demain, je vais faire une balade à byciclette.");

        if(!etatByciclette()){
            console.log("Ma byciclette n'estpas en parfait étatde fonctionnement, je passe chez le garagiste avant la balade.");
            console.log("j'espère que les réparations seront immédiates pour que je puisse faire la balade.");
        }else{
            console.log("Ma byciclette est en état je peux faire la balade.");
        }
    }else{
        console.log("Il ne fait pas beau demain, je consacrema journée à la lecture.");

        if(livreDisponibleMaison()){
            console.log("Le livre est disponible à la maison. je m'installe confortablementdans un fauteil et je me plonge dans la lecture.");
        }else{
            console.log("Le livre n'est pas disponible à la maison. J'irais à la bibliothèque municipale.");

            if(livreDisponibleBibliotheque()){
                console.log("Le livre est disponible à la bibliothèque municipale. Je l'emprunte et je rentre à la maison.");
            }else{
                console.log("Le livre n'est pas disponibleà la bibliothèque municipale. J'emprunte un roman policier.");
            }
            console.log("Je rentre à la maison et je m'installe confortablement dans un fauteil pour lire.");
        }
    }
}
const faitBeauDemain =false;
routineMateo(faitBeauDemain);