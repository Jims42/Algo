let ageUtilisateur=18;
if(ageUtilisateur>17){
     console.log("Accès autorisé. Bienvenue sur la plateforme !");
}else if (ageUtilisateur>=13 && ageUtilisateur<=17){
    console.log("'Accès restreint. Autorisation parentale requise.");
}else{
    console.log("Accès refusé. Contenu réservé aux adolescents et adultes.");
}