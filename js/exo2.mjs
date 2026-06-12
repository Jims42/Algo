// Exercice 2 : Le Contrôleur d'Accès Réseau
// Difficulty : Facile (★★☆☆☆)  |  Temps estimé : 15 minutes
// Objectifs clés : Structures conditionnelles (if, else if, else), opérateurs de comparaison.

// Énoncé :
// Déclarez une variable 'ageUtilisateur'. Écrivez une structure conditionnelle qui teste la valeur de cette variable et affiche un message adapté dans la console :
// • Si l'âge est inférieur à 13 ans : 'Accès refusé. Contenu réservé aux adolescents et adultes.'
// • Si l'âge est compris entre 13 et 17 ans (inclus) : 'Accès restreint. Autorisation parentale requise.'
// • Si l'âge est de 18 ans ou plus : 'Accès autorisé. Bienvenue sur la plateforme !'
// Testez votre programme en changeant manuellement la valeur de 'ageUtilisateur' pour vérifier les 3 cas.

let ageUtilisateur=18;
if(ageUtilisateur>17){
     console.log("Accès autorisé. Bienvenue sur la plateforme !");
}else if (ageUtilisateur>=13 && ageUtilisateur<=17){
    console.log("'Accès restreint. Autorisation parentale requise.");
}else{
    console.log("Accès refusé. Contenu réservé aux adolescents et adultes.");
}