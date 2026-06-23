import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

async function main() {
    const clavier = createInterface({ input, output });
    let phrase='';
    while(phrase.length<120){
       phrase=await clavier.question("Veuillez écrire une phrase d' au moins 120 caracrère\n");
        console.log("( longueur actuelle : "+phrase.length+" )");
        if(phrase.length<120){
            console.log("Phrase trop courte !\nRecommencez");
        }

    }
    let occurence=[];
    let phraseMaj=phrase.toUpperCase();
    for (let i=0;i<phraseMaj.length;i++){
        let c=phraseMaj.charAt(i);
        // console.log(c+" ");
        if(c>='A' && c<='Z'){
            let index=c-'A';
            occurence[index]++;
        }
    }
   
        
    }
    console.log("\n--- Résultat du dénombrement ---");
     for (let n = 0; n < occurence.length; n++) {
        let lettre= n+'A';
        console.log(`Lette ${lettre} : ${occurence} fois`);



    clavier.close();
}
await main();