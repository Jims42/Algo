import {createInterface} from "readline/promises";
import { stdin as input, stdout as output } from "process";

var stgobelet=5;

async function main()
{
    const clavier = createInterface(input, output);
    let sommeIntroduite =0;
    if(stgobelet!=0)
    {
        let choix=await clavier.question("vueillez choisir votre boisson !\n");
        let prix = 1.5;
        while(sommeIntroduite<prix)
        {
            console.log("inserer monaie");
            let piece = parseFloat(await clavier.question("montant piece introduite ?\n"));
            sommeIntroduite+=piece;
            
                let somme = prix - sommeIntroduite;
                if (somme>0) {
                    console.log("reste "+somme+" pour validé la boison ");
                
            } else {
                console.log("Votre boisson est en préparation ! ");
                
            }
          
        }
        if (sommeIntroduite>prix)
        {
            let rendu= sommeIntroduite-prix;
            console.log(`monnaie à rendre : ${rendu}`);
        }
        console.log("verser goblet");
        stgobelet--;
        console.log("preparer boisson");
        console.log("Bonne degustation");
    }
    else
    {
        console.log("machine indisponible");
    }
    clavier.close();
}

await main();