import { createInterface } from "node:readline/promises";
import {stdin as input, stdout as output} from "node:process";

async function main(){
    const clavier= new createInterface({input,output});

    let S = 0; //Somme
    let int= 0; //interet
    let N =0; // nombre d'année

    S=await clavier.question("Veuillez saisir le capital que vous souhaitez placer ?\n");
    int = await clavier.question("Veuillez saisir le taux d'interêt de rémunération en %\n");
    N= await clavier.question("Veuillez saisir le nombre d'année pleine du placement\n");

    let interetSimple = ((S*(1+N*(int/100)))-S).toFixed(2);
    let interetCompose = ((S*(1+(int/100))**N)-S).toFixed(2);

    console.log("votre capital placé à interêt simple au bout de "+N+" ans sera de "+interetSimple+" euros");
    console.log("votre capital placé à interêt simple au bout de "+N+" ans sera de "+interetCompose+" euros");
    clavier.close();



}await main();
