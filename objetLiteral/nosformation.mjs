import { createInterface } from "readline/promises";
import { stdin as input, stdout as output } from "process";
import console from "console";
async function main() {
  const clavier = new createInterface({ input, output });

  let tabFormation = [];
  var nosformations = {};

  nosformations["ABC_I"] = 24;
  nosformations["ADRN"] = 8;
  nosformations["TIP"] = 20;
  nosformations["TRI"] = 7;
  nosformations["TSSR"] = 22;
  nosformations["AIS"] = 6;
  nosformations["AEC"] = 5;
  nosformations["DWWM"] = 21;
  nosformations["CDA"] = 23;
  nosformations["ISI"] = 4;

  for (let formation in nosformations) {
    tabFormation.push([formation, nosformations[formation]]);
  }
  tabFormation.sort((a, b) => b[1] - a[1]);
  nosformations = {};

  tabFormation.forEach((element) => {
    let formation = element[0];
    let stagiaires = element[1];
    nosformations[formation] = stagiaires;
  });
  console.log(
    "-----------------------------------------------------------------------------------------------------------------------------------------------",
  );
  console.log(afficherchaine(nosformations));
  console.log(
    "-----------------------------------------------------------------------------------------------------------------------------------------------",
  );
//   console.table(nosformations);
  console.log(nosformations);

console.log(nosformations.DWWM);








  //     var tableauPersonnalise = Object.keys(nosformations).map(cle => {
  //     return {
  //         "Formation": cle ,     // Remplace 'index'
  //         "nombres (Stagiaires)": nosformations[cle] // Remplace 'value'
  //     };
  // });
  // console.log(tableauPersonnalise);
  // console.table(tableauPersonnalise);

  clavier.close();
}

function afficherchaine(objet) {
  let tabaffichage = "[ ";
  for (const key in objet) {
    tabaffichage += key + " <=> " + objet[key] + " || ";
  }
  tabaffichage = tabaffichage.substring(0, tabaffichage.length - 1);
  tabaffichage += " ]";

  return tabaffichage;
}
await main();
