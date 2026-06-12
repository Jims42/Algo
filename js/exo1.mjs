// Exercice 1 : Salutations Personnalisées et Variables
// Difficulty : Très Facile (★☆☆☆☆)  |  Temps estimé : 10 minutes
// Objectifs clés : Déclaration de variables (let, const), concaténation ou template literals, affichage console.

// Énoncé :
// Créez deux variables nommées 'prenom' et 'age'. Affectez-leur votre prénom et votre âge (ou des valeurs fictives). Écrivez ensuite un script qui calcule l'âge que vous aurez dans 5 ans, puis affichez dans la console un message ressemblant exactement à ceci :
// Bonjour Thomas, tu as 22 ans.
// Dans 5 ans, tu auras 27 ans !

let prenom='Jimmy';
let age=45;
let anneeFutur=5;
let ageFutur=age + anneeFutur;

console.log(`Bonjour ${prenom}, tu as ${age} ans. `);
console.log(`Dans ${anneeFutur} ans, tu auras ${ageFutur} ans !`);
