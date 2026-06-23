import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
// import employes from "https://arfp.github.io/tp/web/javascript2/03-employees/employees.json" with { type: "json" };
async function main() {
  const clavier = createInterface({ input, output });

  // VERSION 1
//   const employes = await fetch(
//     `https://arfp.github.io/tp/web/javascript2/03-employees/employees.json`,
//   ).then((rep) => rep.jison());
//   console.log(employes.data);

  // VERSION 2
  const json = await fetch(
    `https://arfp.github.io/tp/web/javascript2/03-employees/employees.json`,
  );
  const employes = await json.json();
//   console.log(employes.data);
//   console.table(employes.data);

  let database = [];
 database=employes.data;
//   database=Object.entries(employes.data);
  

// for (let i = 0; i < employes.data.length; i++) {
//     database.push(employes.data[i].employee_name);
    
// }
// const database = employes.data.map(emp => emp.employee_name);
console.log(database);
console.table(database);
  clavier.close();
}
await main();
