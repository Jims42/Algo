// Exercice 5 : Le Convertisseur de Température Polyvalent
// Difficulty : Avancé Débutant (★★★★★)  |  Temps estimé : 30 minutes
// Objectifs clés : Déclaration et appel de fonction, paramètres, mot-clé return, réutilisation de code.

// Énoncé :
// Créez une fonction appelée 'convertirCelsiusEnFahrenheit' qui prend un paramètre 'celsius' (un nombre).Cette fonction doit appliquer la formule de conversion mathématique suivante : Fahrenheit = (Celsius × 9/5) + 32, puis retourner (return) le résultat.

// Une fois la fonction créée, appelez-la 3 fois dans votre script pour convertir les températures suivantes, et affichez les résultats proprement dans la console :
// • 0°C (Point de congélation de l'eau)
// • 25°C (Température ambiante agréable)
// • 100°C (Point d'ébullition de l'eau)

function convertirCelciusEnFajrenheit(celcius){
   let fahrenheit=0
fahrenheit=(celcius*9/5)+32
return fahrenheit;
}
let fahrenheit=0;
fahrenheit=convertirCelciusEnFajrenheit(0);
console.log(fahrenheit);
fahrenheit=convertirCelciusEnFajrenheit(25);
console.log(fahrenheit);
fahrenheit=convertirCelciusEnFajrenheit(100);
console.log(fahrenheit);