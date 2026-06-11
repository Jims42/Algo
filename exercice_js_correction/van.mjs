import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";

async function main() {
    const clavier = createInterface({ input, output });
    let tabCashFlow=new Array();
    let val=0;
    let invest=parseFloat(await clavier.question(`Veuillez saisir le montant de l'investissement de départ : `))
    const TAUX=0.08;
    let vr=parseFloat(await clavier.question(`Valeur résiduelle de l'investissement au bout de 5 ans : `));

    for (let i = 0; i < 4; i++) {
        val=parseFloat(await clavier.question(`Veuillez saisir le cash-flow n° ${i+1} : `));

        tabCashFlow.push(val);
        
    }
    console.log(tabCashFlow)
    let VAN=-invest;
    for (let k = 0; k < tabCashFlow.length; k++) {
        VAN+=tabCashFlow[k]/(1+TAUX)**(k+1)    
    }
    VAN+=vr/Math.pow((1+TAUX),(tabCashFlow.length+1));
    console.log(`La VAN de l'investissement : ${invest} € sera de : ${VAN.toFixed(2)} k€`);


    clavier.close();
}
await main();