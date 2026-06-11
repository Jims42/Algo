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
