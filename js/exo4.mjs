// Exercice 4 : Le Calculateur de Moyenne de Classe
// Difficulty : Intermédiaire (★★★★☆)  |  Temps estimé : 25 minutes
// Objectifs clés : Manipulation des tableaux (Array), itération complète, calcul mathématique simple.

// Énoncé :
// On vous fournit le tableau suivant contenant les notes d'un étudiant : [11, 15, 9, 18, 14, 13]. Écrivez un script en JavaScript qui parcourt automatiquement ce tableau, calcule la somme de toutes les notes, puis détermine la moyenne générale de l'étudiant.
// Affichez ensuite le résultat final dans la console avec une phrase claire.
// Indice : Utilisez une variable 'somme' initialisée à 0 et une boucle pour additionner chaque élément du tableau. Utilisez la propriété '.length' pour diviser à la fin.

let tabNote=[11,15,9,18,14,13];
let sommeNote=0;
let moyNote=0;
tabNote.forEach((tabNote, index) => {
    console.log(`Devoir n°${index + 1} : ${tabNote}`);
});
// for (const note of tabNote) {
//     console.log(`Note : ${note} / 20`);
// }
for(let i=0;i<tabNote.length;i++){
   sommeNote +=tabNote[i];
    // console.log(sommeNote);
}
console.log(`La somme des notes est ${sommeNote}`);
moyNote=sommeNote/tabNote.length;
console.log(`la moyenne des ${tabNote.length} notes est ${moyNote.toFixed(2)} /20 `);
