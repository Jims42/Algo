import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
// import employes from "https://arfp.github.io/tp/web/javascript2/03-employees/employees.json" with { type: "json" };
async function main() {
    const clavier = createInterface({ input, output });
    const employes= await fetch(`https://arfp.github.io/tp/web/javascript2/03-employees/employees.json`).then(rep => rep.json());
    
    console.log(employes.data);
console.table(employes.data)

let database=[];









    clavier.close();
}
await main();