console.log("Hello, World!");
console.log("Courage, fini java , debut JS");
 let fruits = "pomme verte";
 let nombre = 5;
 console.log(fruits, nombre);

 const user ={
    nom:'coco',
    prenom:'jimmy',
    age: 45,
    adresse: {
        rue:'41 rue Georges Sand',
        ville:'Mulhouse',
        departement:'Grand est'
            },
    loisirs:['jeux video','films', 'randonnés']
 };

 console.log(user.nom);
 console.log(user.loisirs[0]);
 console.log(user.adresse.ville);

// Function to change the background color of the page
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}   