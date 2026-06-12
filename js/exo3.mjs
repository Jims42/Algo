// Exercice 3 : La Table de Multiplication Automatisée
// Difficulty : Intermédiaire Débutant (★★★☆☆)  |  Temps estimé : 20 minutes
// Objectifs clés : Utilisation des boucles (for), incrémentation, affichage dynamique.

// Énoncé :
// Choisissez un nombre entier (par exemple 7) et stockez-le dans une variable nommée 'nombre'. À l'aide d'une boucle 'for', générez et affichez la table de multiplication de ce nombre de 1 à 10 dans votre console.
// Exemple de résultat attendu pour le nombre 7 :
// 7 x 1 = 7
// 7 x 2 = 14
// ...
// 7 x 10 = 70

let nombre = 8;
for (let i = 1; i <= 10; i++) {
  let resultat = nombre * i;
  console.log(nombre + " x " + i + " = " + resultat);
  // process.stdout.write(nombre+" x "+i+" = "+resultat);
}
