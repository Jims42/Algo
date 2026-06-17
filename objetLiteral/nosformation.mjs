import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";
import console from "console";
async function main() {

    const clavier = new createInterface({ input, output });

    var nosformations= {};

    nosformations['ABC_I']=24;
      nosformations['ADRN']=8;
       nosformations['TIP']=20;
        nosformations['TRI']=7;
         nosformations['TSSR']=22;
          nosformations['AIS']=6;
           nosformations['AEC']=5;
            nosformations['DWWM']=21;
             nosformations['CDA']=23;
              nosformations['ISI']=4;
              
              
    // nosformations.sort(  );
    console.log(nosformations);
    console.table(nosformations);
    console.log(afficherchaine(nosformations));

    var tableauPersonnalise = Object.keys(nosformations).map(cle => {
    return {
        "Formation": cle ,     // Remplace 'index'
        "nombres (Stagiaires)": nosformations[cle] // Remplace 'value'
    };
});
console.log(tableauPersonnalise);
console.table(tableauPersonnalise);



    clavier.close();
}

function afficherchaine(objet) {

      let tabaffichage="[";
    for (const key in objet) {
        tabaffichage+= key+ ':' +objet[key]+" ,";   
    }  
    tabaffichage=tabaffichage.substring(0,tabaffichage.length-1);        
    tabaffichage+="]";
    return tabaffichage;
}
await main();